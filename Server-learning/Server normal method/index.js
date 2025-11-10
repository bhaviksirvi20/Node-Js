const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<center><p>Welcome to your Node.js server at port 5000 🌐</p></center>");
  res.end();
});

server.listen(5000, () => {
  console.log("✅ Server is up and running at http://localhost:5000");
});
