//Creaciom de bases de datos en Mongo
const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/pwa';

Mongo.connect(URL, (error,db)=>{
    if(error) throw error;
    console.log('Base de Datos Creada');
    db.close();
});