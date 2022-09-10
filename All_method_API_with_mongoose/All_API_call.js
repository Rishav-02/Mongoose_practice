const express = require("express");

//import to connect MongoDB database
const db = require("./config");
//import model and Schema is already inside model
const Food_Product = require("./Schema_Model");

const app = express();

//express.json() change/parses the incoming string data to json data and request to get body in "post" method.
app.use(express.json());

//This is also method to create data in MongoDB.

/* app.post("/create", async (req, res) => {
    const data = new Food_Product(req.body);
    const result = await data.save();
    console.log(result);
    res.send(result);
  }); */
  
// **** post method use to create data **** //
app.post("/create", async (req, res) => {
  const data = await Food_Product.create(req.body);
  console.log(req.body);
  res.send(data);
});

// **** get method **** //
//find({brand:"Poland"})  pass target as an argument what to find and then get that whole data.
app.get("/list", async (req, res) => {
  const data = await Food_Product.find();
  console.log(data);
  res.send(data);
});

// **** delete method **** //
app.delete("/delete/:_id", async (req, res) => {
  //I create 2 same data food_name:Kitkat one is delete by this method a one is still in DB.
  const data = await Food_Product.deleteOne(req.params); //{_id:"62d652cfea2db380c38ce868"}
  console.log(req.params);
  res.send(data);
});

// **** put method **** //
//request from parameter price to target data for update. Here, The one whose price is 230 has to be updated from "category":"protein" to "category":"Bean" .
app.put("/update/:price", async (req, res) => {
  const data = await Food_Product.updateOne(
    req.params, //target by {price:230} here req.params or req.body both can use to send request
    {
      $set: req.body, //set what to update(in my case it is category) in body of postman
    }
  );
  console.log(req.params);
  console.log(req.body);
  res.send(data);
});


// **** get method to search data from Database **** //
//post,put and delete method can also be used to search data from Database but these are not standard method for do search i.e use get.
//The $or operator performs a logical OR operation on an array of two or more <expressions> and selects the documents that satisfy at least one of the <expressions>.
// Syntax is:   { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }

app.get("/search/:key",async (req,res)=>{
  let data=await Food_Product.find(
    {
      "$or":[
        {"food_name":{$regex:req.params.key}},
        {"brand":{$regex:req.params.key}},
        {"category":{$regex:req.params.key}}
      ]
    })
    console.log(req.params.key);
  res.send(data);
});




app.listen(6000);