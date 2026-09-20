const express = require('express');
const router = express.Router();
const aiController = require("../controllers/ai.constroller");

router.get("/get-response", aiController.getResponse);

module.exports = router;