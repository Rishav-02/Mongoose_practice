// import express from "express"; //ES6
// import multer from "multer";
const express = require('express');
const multer = require('multer');
const app = express();

//file can also uploaded without multer. In file system module of nodejs there are some function present to upload the file but from these functions we will have to write more code.
//destination and filename. They are both functions that determine where the file should be stored.
const upload = multer({
  storage: multer.diskStorage({
     destination:(req, file, cb)=> 
     {
        cb(null,"uploads")
     },
     filename:(req,file,cb)=>
     {
        cb(null,file.fieldname + "_" + Date.now() + ".jpg")
     }
})
}).single("planet_file");

app.post("/upload", upload, (req, res) => {
  res.send("file uploaded");
});


app.listen(5000);