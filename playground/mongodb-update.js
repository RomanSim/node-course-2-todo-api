const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c571b6b534e2e61980454c7')
    },{
       $set: {
           name: 'Boni'
       },
        $inc: {
            age: 1

        }
    },{
        returnOriginal: false

    }).then((result) => {
       console.log(result);
    });


    //db.close();
});