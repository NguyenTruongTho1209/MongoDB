const mongoose = require('../config/mongoose')

const UserSchema = new mongoose.Schema({
    userName : {type: String},
    age: {type: Number}
}, {collection: 'user'})

const UserModel = mongoose.model('user' , UserSchema)

// UserModel.create({userName: 'An' , age:22},{userName: 'Minh' , age:22})
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

module.exports = UserModel