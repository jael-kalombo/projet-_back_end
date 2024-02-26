const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
//const router=require(express.Router())
const app = express();
app.use(express.json())
app.use("/users", require('./route/usersRoutes.js'));
app.use("/postUser",require('./route/usersRoutes.js'))
app.use("/post",require('./route/postsRoutes.js'));

app.use('/api/users',require('./route/usersRoutes.js'));

app.listen(3000, () => {
    console.log("bienvenue sur le port 3000")
});
