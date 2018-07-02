//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) {
        return console.log("Unable to Connect to MongoDB Server");
    }
    console.log('Connected to MongoDB SERVER');
    const db = client.db('TodoApp');
    // ============ QUERIES START HERE! ============== //

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Each Lunch'}).then((result) => {
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({complete: false}).then((res)=>{
        console.log(res);
    });



    // ============= DB Close ======================= //
    //client.close();
});


