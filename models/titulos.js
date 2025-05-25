const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    titulo:{type:String, required:true},
    descripcion:{type:String, required:true},
    estado:{type:Boolean, required:true}
})
const tarea = mongoose.model('tarea', tareaSchema);

module.exports = {tarea};