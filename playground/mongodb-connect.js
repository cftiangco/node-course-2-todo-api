//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) {
        return console.log("Unable to Connect to MongoDB Server");
    }
    console.log('Connected to MongoDB SERVER');
    const db = client.db('TodoApp');

    client.close();

     // db.collection('Users').insertOne({
    //     name:'Crimson',
    //     age:27,
    //     location:'Quezon City'
    // },(err,res) => {
    //     if(err) {
    //         return console.log("Unable to insert to Users db");
    //     } else {
    //         console.log(JSON.stringify(res.ops, undefined, 2));
    //     }

    // });

});