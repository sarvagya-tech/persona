import chatWithPersona from "../service/ai.service.js";

export async function chatController(req, res) {
  try {
    const { message, persona } = req.body;
    const normalizedMessage = typeof message === "string" ? message.trim() : "";
    const normalizedPersona = typeof persona === "string" ? persona.trim() : "hitesh";

    if (!normalizedMessage) {
      return res.status(400).json({
        success: false,
        message: "message is required",
      });
    }

    if (normalizedMessage.length > 4000) {
      return res.status(400).json({
        success: false,
        message: "message is too long",
      });
    }

    const reply = await chatWithPersona(normalizedPersona, normalizedMessage);

    return res.status(200).json({
      success: true,
      data: reply,
    });
  } catch (error) {
    if (error.message === "Invalid persona") {
      return res.status(400).json({
        success: false,
        message: "Invalid persona",
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}
