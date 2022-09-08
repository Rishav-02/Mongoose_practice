const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/E-commerce"); // mongoose.connect() method return promise and is use to connect with MongoDB database.

//create a new Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  Category: String,
});
const createdata = async () => {
  const productModel = mongoose.model("product2", productSchema);

  //******* This is 1st method *******/
  
  //Use create() method to insert/create data in mongoose.
  //A Mongoose model doesn't have insertOne() method to create data but insertOne() method is present in mongodb to create data.
  let data1 = await productModel.create({
    name: "Audi A7",
    price: 103400,
    brand: "Audi AG",
    Category: "Vehicles",
  });
  console.log(data1);


  //******* This is 2nd method *******/

  //pass the same parameter with value that we create in new Schema
  let data2 = new productModel({
    name: "BMW X3",
    price: 10000,
    brand: "Bayerische Motoren Werke AG",
    Category: "Vehicles",
  });
  // Saves this document by inserting a new document into the database
  const result = await data2.save();
  console.log(result);
};


createdata();