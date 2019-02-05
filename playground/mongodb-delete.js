const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteOne({
    //     _id: ObjectID('5c572a24f8687945e45d4504')}).then((result) => {
    //         console.log(result);
    // });
    db.collection('Users').deleteMany({name: 'Roman'}).then((result) => {
        console.log(result);
    });

    //db.close();
});