const express = require("express")
const drinks = require("./models/drinks")

const app = express()

app.listen(3002,() => {
    console.log("Listening")
})

app.get("/GitPub", (req, res) => {
    res.send(`Welcome to the Gitpub App!`);
})

app.get("/drinks", (req, res) => {
    res.render("index", {drinks: drinks})
})

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/drinks/:id", (req, res) => {
    const drinkId = req.params.id;
    const drink= drinks[drinkId];
    drink.image += ".png";
    res.render("show", {drink})
})