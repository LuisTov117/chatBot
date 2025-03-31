const express = require('express');
const router = express.Router();
const apiC = require("../Controller/apiController")

router
.get('/', apiC.verificar)
.post('/',apiC.recibir)


module.exports = router;