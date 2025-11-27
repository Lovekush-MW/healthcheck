const http = require("http");

const PORT = process.env.PORT || 4000;
const server = http.createServer((req, res) => {

  if (req.url === "/") {
    // Root route
    const payload = { message: "Healthcheck App Running!" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(payload));
    return;
  }

  if (req.url === "/health") {
    const payload = {
      status: "Running auto",
      time: new Date().toISOString(),
      pid: process.pid
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(payload));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "not_found" }));
});

server.listen(PORT, () => {
  console.log(`health-check listening on port ${PORT}`);
});
