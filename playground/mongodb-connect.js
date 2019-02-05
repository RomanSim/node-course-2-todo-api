const MongoClient = require('mongodb').MongoClient;
var user = {name: 'Roman', age: 30};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Users').insertOne({
    //
    //     name: 'Roman',
    //     age: 30,
    //     location: 'Sderot'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Todo', err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});