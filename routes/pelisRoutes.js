const router = require('express').Router();
const {pelisController} = require('../Controller/pelisController');

router.post('/crear', pelisController.createPelis);
router.get('/listar', pelisController.getPelis);

module.exports = router