const express = require('express');
const { connecter } = require('./bd/connect');
const app = express();

app.get("/", (req, res) => {
    res.send("bienvenue")
})

connecter

app.listen(3000, () => {
    console.log("bienvenue sur le port 3000")
});
