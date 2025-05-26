const {pelisModel} = require('../models/pelisModel');

const pelisService = {
    async createPelis(titulo, descripcion, duracion, path){
        const newPeli = new pelisModel({
            titulo, descripcion, duracion, path
        });
        return await newPeli.save();
    }
}

module.exports = {pelisService};