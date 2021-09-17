import tornado.web


class RootHandler(tornado.web.RequestHandler):

    def get(self):
        self.write('index')


class NotFoundHandler(tornado.web.RequestHandler):

    def get(self):
        self.write('Not Found')
