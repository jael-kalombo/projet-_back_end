const { MongoClient, Db, ClientEncryption } = require("mongodb");

let custumer = null;

function connecter (url ,calback){
    if (custumer==null){
        custumer= new MongoClient(url);

        custumer.connect((Error) =>{
            if(Error){
                custumer=null;
                calback(Error)
            }else{
                calback();
            }
        })
    }else{
        calback();
    }
}

function bd (){
    return new Db(custumer, "bdok")
}

function nonConnecter (){
    if (custumer){
        custumer.close();
        custumer=null
        
    }
}

module.exports ={connecter,bd,nonConnecter};