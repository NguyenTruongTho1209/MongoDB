const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bootcamp3');

// tạo bảng data mới
const ClassSchema = mongoose.Schema({
    className: {type: String ,unique: true},
    teacher: {type: String},
    studentNumber: {type: Number},
    address: {
        number: {type: Number},
        street: {type: String}
    },
    phone: [{type: String}]
}, {collection: 'class'})

const ClassModel = mongoose.model('class' , ClassSchema);

// ClassModel.create({
//         className: 'front-end 5',
//         teacher: 'Tho',
//         studentNumber: 30,
//         address: {
//             number: 20,
//             street: 'Nguyen Trai'
//         }
//     }).then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     })

ClassModel.deleteMany().then(data => {
    console.log(data);
})


// ClassModel.find().sort({studentNumber: 1 , className: -1}).limit(3).skip(2).then(data => {
//     console.log(data);
// })

