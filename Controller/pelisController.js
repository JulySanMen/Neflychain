import { pelisService } from "../service/pelisService";

const pelisController = {
    async createPelis(req, res){
        const {titulo, descripcion, duracion, path} = req.body;
        const savePeli = await pelisService.createPelis(titulo, descripcion, duracion, path);
        res.json(savePeli)
    }
}

module.exports = {pelisController};