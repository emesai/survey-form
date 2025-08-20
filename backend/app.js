const express = require("express");
const bodyParser = require("body-parser");
const questionRoutes = require("./routes/question.route");
const responseRoutes = require("./routes/response.route");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/questions", questionRoutes);
app.use("/responses", responseRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
