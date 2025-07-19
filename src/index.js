const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
  console.log("Server is running on http://localhost:3001");
});
