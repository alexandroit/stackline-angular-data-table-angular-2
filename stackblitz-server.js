var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');

var root = __dirname;
var port = Number(process.env.PORT || 4200);
var host = process.env.HOST || '0.0.0.0';

var contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ts': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function send(response, statusCode, body, contentType) {
  response.writeHead(statusCode, {
    'Content-Type': contentType || 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  response.end(body);
}

function sendFile(response, filePath) {
  fs.readFile(filePath, function (error, body) {
    if (error) {
      send(response, 500, String(error));
      return;
    }

    send(response, 200, body, contentTypes[path.extname(filePath)] || 'application/octet-stream');
  });
}

function safeFilePath(requestPath) {
  var decoded = decodeURIComponent(requestPath);
  var normalized = path.normalize(decoded).replace(/^([\/\\])+/, '').replace(/^(\.\.[\/\\])+/, '');
  var filePath = path.resolve(root, normalized);

  if (filePath !== root && filePath.indexOf(root + path.sep) !== 0) {
    return root;
  }

  return filePath;
}

function handle(request, response) {
  var parsed = url.parse(request.url);
  var pathname = parsed.pathname || '/';
  var filePath;

  if (pathname === '/') {
    sendFile(response, path.join(root, 'index.html'));
    return;
  }

  filePath = safeFilePath(pathname);

  fs.stat(filePath, function (error, stat) {
    if (!error && stat.isFile()) {
      sendFile(response, filePath);
      return;
    }

    if (!path.extname(pathname)) {
      sendFile(response, path.join(root, 'index.html'));
      return;
    }

    send(response, 404, 'Not found');
  });
}

http.createServer(handle).listen(port, host, function () {
  console.log('Available on:');
  console.log('  http://127.0.0.1:' + port);
  console.log('Hit CTRL-C to stop the server');
});
