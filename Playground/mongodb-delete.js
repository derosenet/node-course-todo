const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoDB', (err, client) => {
    if(err)
        return console.log('Unable to connect to mongodb');
    console.log('Successfully connected to mongodb');
    const db = client.db('TodoDB');
    // deleteMany, deleteOne, findOneAndDelete
    /*
    db.collection('TodoCollection').deleteMany({text: 'Walk the dog'}).then((result) => {
        console.log(result);
    });

    db.collection('TodoCollection').deleteOne({text: 'Something to do'}).then((result) => {
        console.log(result);
    });
    */
   // findOneAndDelete returns the deleted object
    db.collection('TodoCollection').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
    
});