//A Mongoose model is a wrapper on the Mongoose schema. 

//A Mongoose schema defines the structure of the document, default values, validators, etc.

//Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

//Before creating a model, we always need to create a Schema. The SchemaType specifies what type of object is required at the given path.

//Note: The .model() function makes a copy of schema Make sure that you've added everything you want to schema, including hooks, before calling .model()

const mongoose = require("mongoose");

const main = async () => {
  // mongoose.connect() method return promise and is use to connect with MongoDB database.
  const db = await mongoose.connect("mongodb://localhost:27017/E-commerce");

  //Creating/Defining the Schema and create new instance
  const productSchema = new mongoose.Schema({      name: String, 
  price: Number
 });

  //Creating model/collection
  //mongoose.model(<Collectionname>, <CollectionSchema>) function accept two parameters and return Mongoose object.

  //For collection/model name i.e product2. Mongoose automatically looks for the plural, lowercased version of your model name.
  const productModel = mongoose.model("product2", productSchema);

  //creating document from model
  //let data = new productModel({ name: "Lava"});
  let data = new productModel({ name: "Lava", price: 1000 }); //here we don't get data with price because in Schema() I firstly only mention name so only name is access by model. Schema put validation i.e restriction
  //To solve this problem we have to also mention price as an parameter in Schema
  let result = await data.save(); //save to database
  console.log(result);
};

main();
