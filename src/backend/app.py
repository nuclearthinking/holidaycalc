import os

import click
import tornado.ioloop
import tornado.log
import tornado.web

from backend import handlers


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_ROOT = os.path.join(BASE_DIR, 'static')


def setup():
    ...


@click.group()
def cli() -> None:
    setup()


@cli.command()
def serve() -> None:
    app = tornado.web.Application(
        handlers=[
            (r'/static/(.*)', tornado.web.StaticFileHandler, {'path': STATIC_ROOT}),
            ('/', handlers.RootHandler),
            ('/calculator/calculate-spendings', handlers.CalculateSpendingsHandler)
        ],
        debug=True,
        log_function=_log_method,
        template_path=STATIC_ROOT,
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
