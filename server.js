// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express =require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
/*
const { request } = require("node:http");
*/
const { response } = require("express");

// Start up an instance of app
const app=express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000
app.listen(port,()=>{
    console.log(`server is working on :http://localhost:${port}`);
});
localhost = 3000;

app.get('/all',(req,res)=>{
    res.send(projectData);
})

app.post('/postdata',(req,res)=>{
    projectData={
        temp:requset.body.temp,
        data:requset.body.data,
        content:requset.body.content

    };
    res.send(projectData);
});

    