const router = require('express').Router();
const {pelisController} = require('../Controller/pelisController');

router.post('/crear', pelisController.createPelis);

module.exports = router