const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoDB', (err, client) => {
    if(err)
        return console.log('Unable to connect to mongodb');
    console.log('Successfully connected to mongodb');
    const db = client.db('TodoDB');
    db.collection('TodoCollection').insertOne({
        text: 'Walk the dog',
        completed: false
    }, (err, result) => {
        if(err)
            return console.log('Unable to insert into TodoCollection', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
        // the _id has an embedded timestamp, so it's made up of timestamp, machine id, process id, and then something like a sequence
        // get the timestamp from the id
        console.log(result.ops[0]._id.getTimestamp());
    });
    client.close();
});