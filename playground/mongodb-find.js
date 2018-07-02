//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) {
        return console.log("Unable to Connect to MongoDB Server");
    }
    console.log('Connected to MongoDB SERVER');

    // const db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b38128a2673fc292cbe076d')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('Unable to fetch todos',err);
    // });

    // const db = client.db('TodoApp');
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // },(err) => {
    //     console.log('Unable to fetch todos',err);
    // });

    const db = client.db('TodoApp');
   db.collection('Users').find({name:'Yumi'}).toArray().then((res) => {
        console.log(res);
   });

    //client.close();
});


