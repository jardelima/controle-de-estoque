const express = require("express");

const routes = express.Router();

const addNewProduct = require("./routes/add-product");
const getAllProducts = require("./routes/get-all-products");
const updateProduct = require("./routes/update-product");
const deleteProduct = require("./routes/delete-product");
const addColorsProducts = require("./routes/add-colors-product");

addNewProduct(routes);
addColorsProducts(routes);
getAllProducts(routes);
updateProduct(routes);
deleteProduct(routes);

module.exports = routes;
