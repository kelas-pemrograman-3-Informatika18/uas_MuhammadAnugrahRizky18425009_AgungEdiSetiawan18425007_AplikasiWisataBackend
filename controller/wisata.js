const wisataModel = require('../model/wisata')
const { requestResponse } =require('../config')
const objectId = require('mongoose').Types.ObjectId
const { deleteImage } = require('../uploadConfig')
const wisata = require('../model/wisata')

exports.masukan = (data) =>
    new Promise((resolve ,reject) => {
        try {
            wisataModel.create(data)
            .then(() => resolve(requestResponse.sukses('Berhasil Input')))
            .catch(() => reject(requestResponse.serverError))
        } catch (error) {
            console.log(error)
        }
    })

exports.ambilsemua = () =>
    new Promise((resolve, reject) => {
        wisataModel.find({})
        .then(wisata => resolve(requestResponse.suksesbuilddata(wisata)))
        .catch(movie => reject(requestResponse.serverError))
    })

exports.ambilsatu = (id) =>
    new Promise((resolve, reject) => {
        wisataModel.findOne({
            _id: objectId(id)
        }).then(wisata => resolve(requestResponse.suksesbuilddata(wisata)))
        .catch(movie => resolve(requestResponse.serverError))
    })

exports.edit = (data, id, changeImage) =>
    new Promise(async(resolve, reject) => {
        wisataModel.updateOne({
            _id: objectId(id)
        }, data)
        .then(() => {
            if (changeImage) {
                deleteImage(data.oldImage)
            }
            resolve(requestResponse.sukses('Berhasil Edit'))
        }).catch(() => reject(requestResponse.serverError))
    })

exports.delete = (id) =>
    new Promise((resolve, reject) => {
        wisataModel.findOne({
            _id: objectId(id)
        }).then(wisata => {
            wisataModel.deleteOne({
                _id: objectId(id)
            }).then(() => {
                deleteImage(wisata.image)
                resolve(requestResponse.sukses('Berhasil Hapus'))
            }).catch(() => reject(requestResponse.serverError))
        })
    })