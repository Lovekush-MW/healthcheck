const http = require("http");

http.get("http://localhost:4000/health", (res) => {
  let data = "";

  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    try {
      const json = JSON.parse(data);
      if (json.status === "ok") {
        console.log("Test passed!");
        process.exit(0);
      } else {
        console.error("❌ Test failed:", json);
        process.exit(1);
      }
    } catch (err) {
      console.error("❌ Invalid JSON:", data);
      process.exit(1);
    }
  });
}).on("error", (err) => {
  console.error("❌ Request error:", err.message);
  process.exit(1);
});
