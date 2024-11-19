const express = require("express");
const app = express();
const path = require("path");


const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


app.set("view engine", "ejs");
app.get("/", (req, res)=> {
    res.render("home.ejs");

});

// app.get("/ig/:username", (req, res)=>{
//     const followers = ["adam", "bob", "steave", "john"];
//     let {username} = req.params;
//     res.render("instagram.ejs", {username, followers});
// });

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs",{data});
});

app.get("/", (req, res)=>{
    res.send("hellow")
});

app.get("/rolldice", (req, res) => { 
    let diceVal = Math.floor(Math.random() * 6) + 1; // Correct variable name
    res.render("roll_dice.ejs", { diceVal });       // Pass diceVal to EJS
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});