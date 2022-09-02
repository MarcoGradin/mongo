const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/pwa';

Mongo.connect(URL, (error,db)=>{
    if(error) throw error;
    const dbo =db.db('pwa');
    const consulta={
        nombre:'Marco'
    }

    dbo.collection('profesores').deleteMany(consulta, (error,res) =>{
        if (error) throw error;
        console.log(`Registro Eliminado: ${consulta}`);
        console.log('==================================');
    });
    //db.close();
});