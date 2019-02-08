const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5c5d540e1ba58ea2cefe8789'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5c5d540e1ba58ea2cefe8789').then((todo) => {
    console.log(todo);
});

