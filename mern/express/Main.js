var express=require('express');
var app=express();
app.use(express.json());
app.get("/myname",(req,res)=>{
    res.json({"msg":"Monisha"});
});
app.post("/myname",(req,res)=>{
    res.json({"name":"Monisha"})
})
app.post("/login",(req,res)=>{
    //let email=req['query']['email'];
    //let pwd=req['query']['password'];
    let {email,pwd}=req['query'];
    if(email == 'admin@gmail.com' && pwd =='password'){
        res.json({"msg":"You are correct"})
    }
    else{
        res.json({"msg":"you are wrong"})
    }
})
//app.post("/register",(req,res)=>{
    //let {name,email,password,address}=req['query'];
    //let {name,email,password,address}=req.body;
    //res.json({"name":name,"email":email,"password":password,"address":address});
//})
app.post("/register",(req,res)=>{
    let {email,password,name,address}=req.body;
if (name ==""){
    res.json({"name":"please enter a name "})
}
else if(email == ''){
    res.json({"msg":"enter a email"});
}else if (password ==''){
    res.json({"msg":"Enter a correct password"});
}
else if (address == ''){
    res.json({"msg":"fill the correct address"});
}
else{
    res.json({"msg":"success"});
}    
console.log(name,email,password,address);    
 });
app.post("/login",(req,res)=>{
    let email=req['query']['email'];
    res.json({"msg":email})
})
app.listen(8080,()=>{
    console.log("server started")
});