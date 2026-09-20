const express = require("express");
const aiRoutes = require("../src/routes/ai.routes");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.use("/api/ai", aiRoutes);

module.exports = app;