const http = require("http");

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/") {
    return res.end(
      JSON.stringify({ message: "Healthcheck App Running!" })
    );
  }

  if (req.url === "/health") {
    return res.end(
      JSON.stringify({
        status: "Running auto",
        time: new Date().toISOString(),
        pid: process.pid
      })
    );
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "not_found" }));
});

server.listen(PORT, () => {
  console.log(`health-check listening on port ${PORT}`);
});
