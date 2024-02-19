const express = require('express');
//const router=require(express.Router())
const app = express();
app.use(express.json())
app.use("/users", require('./route/utilisateur.js'));
app.use("/postUser",require('./route/utilisateur.js'))
app.use("/post",require('./route/postsRoutes.js'));

app.listen(3000, () => {
    console.log("bienvenue sur le port 3000")
});
