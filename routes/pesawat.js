const router = require('express').Router()
const jadwalpesawat = require('../controller/pesawat')

router.post('/input',(req, res) => {
    jadwalpesawat.simpanjadwal(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampil', (req, res) => {
    jadwalpesawat.tampiljadwal()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.put('/edit/:id', (req, res) => {
    jadwalpesawat.editjadwal(req.body, req.params.id)
    .then(result => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampilsingel/:kotaasal', (req, res) => {
    jadwalpesawat.tampilkanSatuData(req.params.kotaasal)
    .then(result => res.json(result))
    .catch((err) => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    jadwalpesawat.delete(req.params.id)
    .then(result => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampilcari/:kotaasal', (req, res) => {
    jadwalpesawat.tampildatacari(req.params.kotaasal)
    .then(result => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/cari', (req, res) =>{
    jadwalpesawat.cari(req.body)
    .then(result => res.json(result))
    .catch((err) => res.json(err))
})
module.exports = router