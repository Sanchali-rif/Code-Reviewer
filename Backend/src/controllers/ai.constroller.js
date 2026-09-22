const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    try {
        const code = req.body.code;

        if (!code) {
            return res.status(400).send("code is required");
        }

        const response = await aiService(code);

        res.send(response);

    } catch (error) {
        console.error("========== AI SERVICE ERROR ==========");
        console.error(error);
        console.error("======================================");

        res.status(500).json({
            error: "Error generating review",
            message: error.message
        });
    }
};