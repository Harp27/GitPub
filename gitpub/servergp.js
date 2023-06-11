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
    res.send(drinks)
})