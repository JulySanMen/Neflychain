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
        if(pelis.length === 0) {
            throw new Error('No hay peliculas disponibles')
        }else{
            return pelis;
        }
    }
}

module.exports = {pelisService};