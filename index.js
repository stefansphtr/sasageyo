const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Hello World");
});

server.listen(80, () => {
  console.log(`Server is running with port 80`);
});
