const mongoose = require('../config/mongoose')
const UserModel = require('./User')

const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: 'user'
    },
    productList: []
}, {collection: 'cart'})

const CartModel = mongoose.model('cart' , CartSchema)

CartModel.find({userId : '63aa6e459335dfe896991ba9'})
.populate({path: 'userId'})
.then(data => console.log(data))
.catch(err => console.log(err))

// CartModel.create({userId : '63aa6e15b23bd767889c7790'},
// {userId : '63aa6e39916f79d1cf47a153'},
// {userId : '63aa6e459335dfe896991ba9'})
// // .populate({path: 'userId'})
// .then(data => console.log(data))
// .catch(err => console.log(err))