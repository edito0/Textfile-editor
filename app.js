const express = require('express');
const path  = require('path');

const app = express();
const port = process.env.PORT || 5000;

const static_path = path.join(__dirname,"./public");

app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(port,()=>{
    console.log(` JAI SHRI GANESH , the server is listening at port no. ${port} `);
})