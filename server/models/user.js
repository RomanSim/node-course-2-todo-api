var mongoose = require('mongoose');


var User = mongoose.model('User', {
    email: {
        type: String,
        required: 'Please enter an email address',
        minlength: 1,
        trim: true
    }
});

module.exports = {User};