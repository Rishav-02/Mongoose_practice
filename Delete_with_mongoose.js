const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/E-commerce");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  Category: String,
});
const deletedata = async () => {
  const productModel = mongoose.model("product2", productSchema);

  let data = await productModel.deleteOne(
    { brand:"Bayerische Motoren Werke AG" }
  );//I create two data of same brand name one deleted in Database and one still remain there.
  console.log(data);
};

deletedata();