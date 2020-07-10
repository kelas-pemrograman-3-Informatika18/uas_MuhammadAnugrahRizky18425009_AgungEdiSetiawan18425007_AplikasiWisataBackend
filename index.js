const express = require('express')
const app = express()
const mogoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const mongoURL = 'mongodb://localhost:27017/uts'
mogoose.connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('berhasil terhubung ke database')
}).catch(() =>{
    console.log('gagal terhubung ke database')
})

const directory = path.join(__dirname, '/statics')
app.use(express.static(directory))
app.use(cors())

app.use(cors())

app.use(bodyParser.json({
    extended: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '20mb'
}))

app.use('/user', require('./routes/user'))
app.use('/wisata', require('./routes/wisata'))
app.use('/event', require('./routes/event'))

app.listen(5001, function ()  {
    console.log('Server telah dijalankan')
})