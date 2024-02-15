
const { utilisateur } = require ("../model/utilisateur")
const Client = require("../model")

const ajouteUtilisateur = async(req,res)=>{
    try{
        let utilisateur = new utilisateur (req.body.noms,req.body.adresse,req.body.telephone);

        let result = await Client.bd().collection("utilisateur").insertone(utilisateur);

        res.status(200).json(result);
    }catch (error){
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports ={ajouteUtilisateur}