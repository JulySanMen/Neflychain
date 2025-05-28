const mongoose = require('mongoose');

const connectDB = async()=>{
    const url = 'mongodb://nf_gael:nf_123@localhost:27019/NEFLYCHAIN?authSource=NEFLYCHAIN';
    try{  
        await mongoose.connect(url);
        console.log('Conmectado a la Base de Datos <3');
    }catch(err){
        console.error('Error al conecatse a la Base de Datos </3' + err);
    }
}
module.exports = connectDB;