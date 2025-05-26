const mongoose = require('mongoose');

const connectDB = async()=>{
    const url = 'mongodb://admin:password@localhost:27019/"';
    try{
        await mongoose.connect(url);
        console.log('Conmectado a la Base de Datos <3');
    }catch(err){
        console.error('Error al conecatse a la Base de Datos </3')
    }
}
module.export = {connectDB}