const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/E-commerce");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  Category: String,
});
const update = async () => {
  const productModel = mongoose.model("product2", productSchema);

  let data = await productModel.updateOne(
    { name: "BMW X3" },
    { $set: { price: 10100,brand:"Bayerische Motoren Werke" } }
  );
  console.log(data);
};

update();