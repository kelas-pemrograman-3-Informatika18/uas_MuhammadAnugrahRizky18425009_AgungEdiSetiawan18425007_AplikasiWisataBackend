const router = require('express').Router()
const eventrout = require('../controller/event')

router.get('/tampil', (req, res) => {
    eventrout.tampiljadwal()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.post('/input',(req, res) => {
    eventrout.simpanjadwal(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.delete('/hapus/:id', (req, res) => {
    eventrout.hapusjadwal(req.params.id)
    .then(result => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampilsatu/:id', (req, res) => {
    eventrout.tampilkansatu(req.params.id)
    .then(result => res.json(result))
    .catch((err) => res.json(err))
})

router.put('/edit/:id', (req, res) => {
    eventrout.editjadwal(req.body, req.params.id)
    .then(result => res.json(result))
    .catch((err) => res.json(err))
})
module.exports = router