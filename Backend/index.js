const doenv=require("dotenv").config();
const port=process.env.PORT || 5000;
const express=require("express");
const methodoverride=require("method-override");
const bodyParser = require('body-parser');
const cors=require('cors');

const app=express();
   
app.use(bodyParser.json());
app.use(methodoverride('_method'));
app.use(cors());
app.use(express.urlencoded({extended : true}));
 
app.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome to shellcode"});
})

app.use("/api/items",require("./routes/itemsRoutes"));

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})