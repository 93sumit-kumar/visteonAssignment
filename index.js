const dbConn = require("./src/config/dbConn");
const express = require("express");
const app = express();
const appRoute = require("./src/routes/routes");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", appRoute);

app.listen(process.env.PORT, () => {
  console.log("Server started at ", process.env.PORT);
});
