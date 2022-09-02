
const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/pwa';

Mongo.connect(URL, (error,db)=>{
    if(error) throw error;

    const dbo = db.db('pwa');

    const data=[
        {
        curso: 'Fullstack',
        pais: 'Argentina'
        },
        {
        curso: 'React',
        pais: 'Uruguay'
        },
        {
        curso: 'Angular',
        pais: 'Brasil'
        },
    ]

    //Insertamos datos a la coleccion
    dbo.collection('cursos').insertMany(data, (err, collection)=>{
        if (error) throw error;
        console.log('Insercion de Datos correcta - 1 Doc.');
        db.close();
    });
});