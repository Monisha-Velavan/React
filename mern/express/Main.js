var express=require('express');
var app=express();
app.get("/myname",()=>{
    response.json({"msg":"Monisha"});
});
app.listen(8080,()=>{
    console.log("server started")
});