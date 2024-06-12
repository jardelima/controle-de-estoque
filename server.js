const express = require("express");
const routes = require("./src/routes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }), bodyParser.json());
app.use(routes);

app.listen(3333);
