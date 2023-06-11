const express = require("express")

const app = express()

app.listen(3002,() => {
    console.log("Listening")
})

app.get("/GitPub", (req, res) => {
    res.send(`Welcome to the Gitpub App!`);
})