const {utilisateur} = require('../model/usersModels')
const {userModel} = require('../model/usersModels');


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


const userController = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const newUser = await userModel.createUser({ name, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
  };


module.exports={getUtilisateur,getOne,postUser, userController}
