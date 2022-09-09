const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/E-commerce");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  Category: String,
});
const find = async () => {
  const productModel = mongoose.model("product2", productSchema);

  let data = await productModel.find(
    { price:10000 });
  console.log(data);
};

find();