const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WisataSchema = new Schema({
    namatempat: {
        type: String
    },
    lokasi: {
        type:String
    },
    fasilitas: {
        type:String
    },
    rating: {
        type:Number
    },
    deskripsi: {
        type:String
    },
    image: {
        type:String
    }
})

module.exports = mongoose.model('wisata', WisataSchema)