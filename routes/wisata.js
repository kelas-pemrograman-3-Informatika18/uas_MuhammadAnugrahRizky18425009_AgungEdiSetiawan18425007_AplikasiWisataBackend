const router = require('express').Router()
const wisatacontroller = require('../controller/wisata')
const uploadSetting = require('../uploadConfig')
const fields = uploadSetting.upload.fields([
    {
        name: 'image',
        maxCount: 1
    }
])

router.post('/insert', fields,(req, res) =>{
    const imageName = uploadSetting.ceknull(req.files['image'])

    const data = Object.assign(JSON.parse(req.body.data), {
        image: imageName
    })

    wisatacontroller.masukan(data)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/getall', (req, res) => {
    wisatacontroller.ambilsemua()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req,res) => {
    wisatacontroller.ambilsatu(req.params.id)
    .then((result) => res.json(result))
    .catch(err => res.json(err))
})

router.put('/edit/:id', fields,(req, res) => {
    const imageName = uploadSetting.ceknull(req.files['image'])
    let data = JSON.parse(req.body.data)
    let changeImage = false
    if (imageName) {
        changeImage = true
        data = Object.assign(data, {
            image: imageName,
            oldImage: data.image
        })
    }

    wisatacontroller.edit(data, req.params.id, changeImage)
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

router.delete('/delete/:id', (req, res) => {
    wisatacontroller.delete(req.params.id)
    .then((result) => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router