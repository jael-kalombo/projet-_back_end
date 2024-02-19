const {utilisateur} = require('../model/utilisateur')


const getUtilisateur =(req,res)=>{
    res.send("bienvenue");
};

const getOne = (req,res)=>{
    const id = req.params.id;
    const user = utilisateur.filter(utilisateur=>utilisateur.id == id)
    res.send (user)
}
const postUser = (req,res)=>{
    const post = req.body
    post.id = utilisateur.length + 1
    post.usermane = 0;
    utilisateur.push(req.body)
    res.json(utilisateur)
    
}

module.exports={getUtilisateur,getOne,postUser}
