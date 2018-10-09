const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoDB', (err, client) => {
    if(err)
        return console.log('Unable to connect to mongodb');
    console.log('Successfully connected to mongodb');
    const db = client.db('TodoDB');
    // toArray() returns a promise
    // find a specific id
    db.collection('TodoCollection').find({}).toArray().then((docs) => {
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });


   
    client.close();
});