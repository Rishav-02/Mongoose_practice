const mongoose = require("mongoose");

//Creating the Schema
const productSchema = new mongoose.Schema({
  food_name: String,
  brand: String,
  price: Number,
  category: String,
});

//Mongoose automatically looks for the plural, lowercased version of your model name.i.e if I use "Food" or "food" then it automatically convert it into lowecase and plural i.e "foods"
const productModel = mongoose.model("food", productSchema);

module.exports = productModel;