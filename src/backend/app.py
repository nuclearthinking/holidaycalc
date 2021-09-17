import os

import click
import tornado.ioloop
import tornado.log
import tornado.web

from backend import handlers


def setup():
    ...


@click.group()
def cli() -> None:
    setup()


@cli.command()
def serve() -> None:
    app = tornado.web.Application(
        handlers=[
            tornado.web.url(r'/', handlers.RootHandler),
            tornado.web.url(r'/static/(.*)', tornado.web.StaticFileHandler)
        ],
        debug=True,
        log_function=_log_method,
        static_path=os.path.join(os.path.dirname(__file__), "static"),
        template_path=os.path.join(os.path.dirname(__file__), "templates"),
        default_handler_class=handlers.NotFoundHandler,
        autoreload=True,
    )
    app.listen(8000)
    tornado.ioloop.IOLoop.current().start()


def _log_method(handler):
    if handler.get_status() < 400:
        log_method = tornado.log.access_log.info
    elif handler.get_status() < 500:
        log_method = tornado.log.access_log.warning
    else:
        log_method = tornado.log.access_log.error

    log_method(
        'status=%d method=%s path=%s host=%s remote_ip=%s duration=%.5f',
        handler.get_status(), handler.request.method,
        handler.request.uri, handler.request.host,
        handler.request.remote_ip,
        handler.request.request_time(),
    )
