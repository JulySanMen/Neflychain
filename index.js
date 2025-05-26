const express = require ('express');
const pelisRoutes = require('./routes/pelisRoutes');
const cors = require('cors');
const app = express();
const connectDB = require('./data/config');

const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use('/crear', pelisRoutes);
connectDB()

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto '+ PORT )
})