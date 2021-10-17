import express from "express";
// const express=require("express");

const app=new express();

app.get('/',(req,res)=>{
res.send(
    `<h1>React is Working using Babel - 2021</h1>`
)
});


app.listen(9200);