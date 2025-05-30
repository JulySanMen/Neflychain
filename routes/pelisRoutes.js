const router = require('express').Router();
const {pelisController} = require('../Controller/pelisController')

router.post('/crear', pelisController.createPelis); 
router.get('/listar', pelisController.getPelis);
router.post('/filtrar',pelisController.filterPelis);

module.exports = router