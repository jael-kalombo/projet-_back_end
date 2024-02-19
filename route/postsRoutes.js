const express = require('express');
const { sauvegarder } = require('../controller/postController');

const router = express.Router();

router.post('', sauvegarder);

module.exports =router