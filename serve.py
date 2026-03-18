import http.server
import os
import socketserver

PORT = int(os.environ.get("PORT", 5000))

with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    httpd.allow_reuse_address = True
    print(f"Serving on port {PORT}")
    httpd.serve_forever()
