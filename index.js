const express = require ('express');
const {connectDB} = require('./data/config');
const pelisRoutes = require('./routes/pelisRoutes');
const cors = require('cors');
const app = express();

const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use('/crear', userRoute, pelisRoutes);

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto '+ PORT )
})