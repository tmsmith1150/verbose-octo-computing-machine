const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));





// Routes folders

app.use(require("./routes/htmlRoutes.js"));


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});