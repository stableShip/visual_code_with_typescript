
/// <reference path="./typings/tsd.d.ts" />

import express = require("express");

var app=express();


app.get("/",function (req,res) {
	res.send("Hello")
})

app.listen(3000,function(){
	console.log("server listen in 3000")
})


