// ES6
import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";

// Before ES6
// const express =require("express");
// const mongoose =require("mongoose");
// const Data =require("./data.js");
// const Videos =require("./dbModel.js");


// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
// to access the all the requests, we are not blocking/restricting anything here.But for production, dont do like this. next() means after this check only allow the next things which are endpoints
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*'),
    next();
})


// DB config
const connection_url =
  "mongodb+srv://admin:YQpmxL0hav33T5Zc@cluster0.hyklt.mongodb.net/tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpoints or routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN APP");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(Data);
});


//fetching all the video details 
app.get("/v2/posts",(req,res)=>{
    Videos.find({},(err,data)=>{
        if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(data);
          }
    })
})

// POST request is to ADD DATA to the database
// It will let us ADD a video DOCUMENT to the videos COLLECTION
app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
