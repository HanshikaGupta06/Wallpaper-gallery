const express = require("express");
const router = express.Router();
const {getTrending} = require('../controller/trending.controller')

router.get('/', getTrending);


module.exports = router;