const { get } = require('mongoose');
const {pelisModel} = require('../models/pelisModel');

class pelisService{
    async createPelis(titulo, descripcion, duracion, path){
        const newPeli = new pelisModel({
            titulo, descripcion, duracion, path
        });
        return await newPeli.save();
    }

    async getPelis(){
        const pelis = await pelisModel.find();
    }
}

module.exports = {pelisService};