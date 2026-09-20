const aiService=require("../services/ai.service")

module.export=async (req, res) => {
    const prompt=req.query.prompt;
    if(!prompt){
        return res.status(400).send("prompt is required");
    }

    const response=await aiService(Prompt);
    res.send(response)
}