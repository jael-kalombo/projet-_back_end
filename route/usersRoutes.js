const express = require('express');
const { getUtilisateur,getOne,postUser, userController } = require('../controller/userControllers');

const router = express.Router();

router.get('', getUtilisateur);
router.get('/:id',getOne)
router.post('',postUser)

router.post('/:id', userController);

module.exports = router;
