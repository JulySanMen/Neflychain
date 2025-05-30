const { pelisService } = require('../service/pelisService');

class pelisController {
    static async createPelis(req, res){
        const {titulo, descripcion, duracion, path} = req.body; 
        const savePeli = await pelisService.createPelis(titulo, descripcion, duracion, path);
        res.json(savePeli)
    } 

    static async getPelis(req, res){
        try{
            const pelis = await pelisService.getPelis();
            res.json(pelis);
        }catch(err){
            res.status(500).json({error: err.message});
        }
    }
}
module.exports = {pelisController};