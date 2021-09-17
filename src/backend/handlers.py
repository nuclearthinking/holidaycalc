import tornado.web


class RootHandler(tornado.web.RequestHandler):

    def get(self):
        self.render('index.html')


class NotFoundHandler(tornado.web.RequestHandler):

    def get(self):
        self.write('Not Found')
