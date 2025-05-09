const express = require ("express");
const router = express.Router();
const {getFavourite}= require('../controller/favourite.controller');
 
router.get('/', getFavourite);

module.exports = router;