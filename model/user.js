const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String
    },
    nama: {
        type:String
    },
    email: {
        type: String
    },
    nomortelepon: {
        type: String
    },
    alamat: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('user', UserSchema)