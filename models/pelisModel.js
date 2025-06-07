const mongoose = require('mongoose');

const pelisSchema = new mongoose.Schema({
   titulo:{type:String, required:true},
   descripcion:{type:String, required:true},
   duracion:{type:String, required:true},
   path:{type:String, required:true},
   image:{type: String, required:true}
}); 
const pelisModel = mongoose.model('pelis', pelisSchema);
module.exports = {pelisModel};