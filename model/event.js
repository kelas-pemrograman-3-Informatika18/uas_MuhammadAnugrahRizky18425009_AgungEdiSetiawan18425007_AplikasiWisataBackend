const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
    judul: {
        type: String
    },
    isi: {
        type:String
    },
    tanggal: {
        type: String
    },
    lokasi: {
        type: String
    }
})

module.exports = mongoose.model('event', EventSchema)