const responseService = require("../services/response.service");

class ResponseController {
  async submitForm(req, res) {
    try {
      const result = await responseService.submitForm(req.body);
      res.status(201).json({
        message: "Form submitted successfully",
        data: result,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ResponseController();
