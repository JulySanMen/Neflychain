const mongoose = require('mongoose');

const pelisModel = new mongoose.Schema({
   titulo:{type:String, required:true},
   descripcion:{type:String, required:true},
   duracion:{type:String, required:true},
   path:{type:String, required:true}
}); 

module.exports = {pelisModel};