const { get } = require('mongoose'); 
const {pelisModel} = require('../models/pelisModel');

class pelisService{
    static async createPelis(titulo, descripcion, duracion, path){
        const newPeli = new pelisModel({
            titulo, descripcion, duracion, path
        });
        return await newPeli.save();
    } 

    static async getPelis(){
        const pelis = await pelisModel.find();
        if(pelis.length === 0) {
            throw new Error('No hay peliculas disponibles');
        }else{
            return pelis;
        }
    }
    static async filterPelis(tiulo){
        const pelis = await pelisModel.findOne({titulo : titulo});
        if(!pelis){
            throw new Error('No se encontro el titulo de la pelicula vayase a cuevana')
        }
    }
}

module.exports = {pelisService}; 