/* Global Variables */
/*
const { json } = require("body-parser");
const { application } = require("express");
*/
const apikey = '5cbeeb7c225beee670afabdd37d539d7';
const url =  'http://api.openweathermap.org/data/2.5/weather?zip=';


mygeneratebtn = document.getElementById("generate")

const erorrcatch = (error)=>{
    console.error("there is error here",error);
}


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

mygeneratebtn.addEventListener("click",generatedata)
    function generatedata(){
        myzipcode = document.getElementById("zip").value;
        myfeelings = document.getElementById("feelings").value;
    
    getweatherapp(url,myzipcode,apikey)
    .then(function(data){
        console.log(data);
        postData('/add',{Data:d,temp:data.main.temp,content:feeling});
        updateUI();
    })
}; 


const getweatherapp = async(url,zip,key)=>{
    const res = await fetch(url+zip+key)
    try{
        const data = await res.json();
        return data;
    }
    catch(error){
        console.log("error",error);
    }
 };

 const postData= async(url="",data={})=>{
     console.log(data);
     const res = await fetch(url,{
         method:'POST',
         credentials:'same-origin',
         headers:{
             'content-type':'application/json'
         },
         body:JSON.stringify(data)
     });
     try{
         const newdata= await res.json();
         console.log(newdata);
         return newdata;
     }
     catch(error){
         console.log("error",error);
     }
 }
 const updateUI = async()=>{
     const req=await fetch('/all');
     try{
         const alldata=await req.json();
         document.getElementById("date").innerHTML = `data: ${alldata[0].date}`;
         document.getElementById("temp").innerHTML = `temperature:${alldata[0].temp}`;
         document.getElementById("content").innerHTML = `my feeling:${alldata[0].content}`;
     }
     catch (error){
         console.log('error'+error)
     }
     }
 
