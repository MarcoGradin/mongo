
const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/pwa';

Mongo.connect(URL, (error,db)=>{
    if(error) throw error;
    const dbo = db.db('pwa');
        //Buscamos datos
        dbo.collection('profesores').find({}).toArray((error,res)=>{
            if (error) throw error;
            console.log(res);
            console.log('===================================');
        });

        dbo.collection('alumnos').find({}).toArray((error,res)=>{
            if (error) throw error;
            console.log(res);
            console.log('===================================');
        });

        dbo.collection('cursos').find({}).toArray((error,res)=>{
            if (error) throw error;
            console.log(res);
            console.log('===================================');
        });

        dbo.collection('profesores').findOne({},(error,res)=>{
            if (error) throw error;
            console.log(res);
            console.log('===================================');
        });
});
