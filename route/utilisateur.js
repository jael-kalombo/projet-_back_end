const express = require('express');
const { getUtilisateur,getOne,postUser } = require('../controller/utilisateur');

const router = express.Router();

router.get('', getUtilisateur);
router.get('/:id',getOne)
router.post('',postUser)

module.exports =router