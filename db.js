const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/userDB").then(() => {
    console.log('db connection workinggggg')
}).catch((error) => {
    console.log('Error in db connection', error);
})

const user = new mongoose.Schema({
    Name: {
        type: String
    },
    Password: {
        type: String
    }
})

module.exports = mongoose.model('users', user);