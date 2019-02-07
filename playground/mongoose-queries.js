const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');
var id = '5c5b6cbc54e8f24788213b4e11';
var id2 ='5c5a35eb622bfa49209c12be11';

if(!ObjectID.isValid(id2)){
    console.log('Id not valid');
}
// Todo.find({
//    _id: id
// }).then((todos) => {
//     console.log('todos',todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todos',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         console.log('Id not found');
//     }
//     console.log('todo by id',todo);
// }).catch((e) => console.log(e));

User.findById(id2).then((user) => {
    if(!user){
        console.log('User not found', user);
    }
    console.log('user by id',user);
}).catch((e) => console.log(e));