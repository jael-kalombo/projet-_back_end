const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userModel = {
  createUser: async (userData) => {
    return prisma.user.create({
      data: userData,
    });
  },
};

const utilisateur = [{
    "id": 1,
    "usermane":0,
    "email": "kalombojael8@gmail.com",
    "password":"21341"
},
{
    "id":2,
    "usermane":0,
    "email": "kalombojael8@gmail.com",
    "password":"21341"
},
];


module.exports={utilisateur ,userModel}