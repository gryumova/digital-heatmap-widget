# from http.server import BaseHTTPRequestHandler
# from http.server import HTTPServer
# import json
# from getData import getData

# def run(server_class=HTTPServer, handler_class=BaseHTTPRequestHandler):
#   server_address = ('', 8000)
#   httpd = server_class(server_address, handler_class)
#   try:
#       httpd.serve_forever()
#   except KeyboardInterrupt:
#       httpd.server_close()


# class HttpGetHandler(BaseHTTPRequestHandler):
#     """Обработчик с реализованным методом do_GET."""

#     def do_GET(self):
#         self.send_response(200)
#         self.send_header("Content-type", "text/html")
#         self.end_headers()
#         data = getData()
#         print(data)
#         self.wfile.write(json.dumps(getData()))

# run(handler_class=HttpGetHandler)  


from http.server import BaseHTTPRequestHandler, HTTPServer
import json

from getData import getData

class Server(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
    def do_HEAD(self):
        self._set_headers()
        
    # GET sends back a Hello world message
    def do_GET(self):
        self._set_headers()
        data = json.dumps(getData())
        self.wfile.write(data.encode('utf-8'))
        
def run(server_class=HTTPServer, handler_class=Server, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    
    print('Starting httpd on port %d...' % port)
    httpd.serve_forever()

run()
#http://127.0.0.1:8000