const http = require("http");
const port = 3000;
const fs = require("fs");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("smth went wrong", error);
  } else {
    console.log("server listening on port " + port);
  }
});
