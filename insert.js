const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/pwa';

Mongo.connect(URL, (error,db)=>{
    if(error) throw error;

    const dbo = db.db('pwa');

    const data={
        nombre: 'Santiago',
        curso: 'Fullstack',
        pais: 'Argentina'
    }

    const datauno={
        nombre: 'Agus',
        curso: 'React',
        pais: 'Argentina'
    }

    const datados={
        nombre: 'Marco',
        curso: 'Angular',
        pais: 'Argentina'
    }

    //Insertamos datos a la coleccion
    dbo.collection('profesores').insertOne(datados, (err, collection)=>{
        if (error) throw error;
        console.log('Insercion de Datos correcta - 1 Doc.');
        db.close();
    });
});