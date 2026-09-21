const express = require("express");
const aiRoutes = require("../src/routes/ai.routes");
const app = express();

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/ai", aiRoutes);

module.exports = app;