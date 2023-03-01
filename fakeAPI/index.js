const products = require("./getProducts.json");
const categories = require("./getCategories.json");
const productDetail = require("./getDetailProducts.json");

module.exports = () => ({
  products: products.data,
  productDetail: productDetail,
  categories: categories,
});
