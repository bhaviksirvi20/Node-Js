const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
    res.send("<center><p>Welcome to your Node.js + Express server 🌐</p></center>");
});

// Start the server
app.listen(5001, (req,res) => {
    console.log("✅ Server running at http://localhost:5001");
});
