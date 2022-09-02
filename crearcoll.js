

const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/pwa';

Mongo.connect(URL, (error,db)=>{
    if(error) throw error;

    const dbo = db.db('pwa');

    //Creamos la coleccion
    dbo.createCollection('profesores', (err, collection)=>{
        if (error) throw error;
        console.log('Collecion de Datos Creada');
        db.close();
    })

    dbo.createCollection('cursos', (err, collection)=>{
        if (error) throw error;
        console.log('Collecion de Datos Creada');
        db.close();
    })

    dbo.createCollection('alumnos', (err, collection)=>{
        if (error) throw error;
        console.log('Collecion de Datos Creada');
        db.close();
    })
});
