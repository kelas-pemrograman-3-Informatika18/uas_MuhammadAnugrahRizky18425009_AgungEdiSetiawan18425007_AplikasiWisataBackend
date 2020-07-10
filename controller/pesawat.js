const jadwalpesawat = require('../model/pesawat')
const objectId = require('mongoose').Types.ObjectId

exports.simpanjadwal = (data) =>
    new Promise((resolve, reject) => {
        jadwalpesawat.create(data)
        .then(() => {
            resolve({
            sukses: true,
            pesan: 'Berhasil Input Kegiatan'
            })
        }).catch(() => {
            reject({
                sukses: false,
                pesan: 'Gagal Input Kegiatan'
            })
        })
    })

    exports.tampiljadwal = () =>
        new Promise((resolve, reject) => {
            jadwalpesawat.find()
            .then(data => {
                resolve({
                    sukses: true,
                    pesan: 'Berhasil Memuat Data',
                    data: data
                })
            }).catch(() => {
                reject({
                    sukses: false,
                    pesan: 'Gagal Memuat Data',
                    data: []
                })
            })
        })

        exports.editjadwal = (data, id) =>
        new Promise((resolve, reject) => {
            jadwalpesawat.updateOne({
                _id: objectId(id)
            },data).then(() => {
                resolve({
                    sukses: true,
                    pesan: 'Berhasil Mengubah Data'
                })
            }).catch(() => {
                reject({
                    sukses: false,
                    pesan: 'Gagal Mengubah Data'
                })
            })
        })

        exports.tampilkanSatuData = (kotaasal) =>
        new Promise((resolve, reject) => {
            jadwalpesawat.find({
                kotaasal: kotaasal
            }).then((data) => {
                resolve({
                    data: data
                })
            }).catch(() => reject ({
                sukses: false,
                pesan: 'Gagal Memuat Data'
            }))
        })

        exports.delete = (id) =>
        new Promise((resolve, reject) => {
            jadwalpesawat.deleteOne({
                _id: objectId(id)
            }).then((data) => {
                resolve({
                    sukses: true,
                    pesan: 'Berhasil Menghapus Data'
                })
            }).catch(() => {
                reject({
                    sukses: false,
                    pesan: 'Gagal Menghapus Data'
                })
            })
        })

        exports.tampildatacari = (kotaasal) =>
        new Promise((resolve, reject) => {
            jadwalpesawat.find({
                kotaasal: kotaasal
            })
            .then(data => {
                resolve({
                    sukses: true,
                    pesan: 'Berhasil Memuat Data',
                    data: data
                })
            }).catch(() => {
                reject ({
                    sukses: false,
                    pesan: 'Gagal Memuat Data'
            })
            })
        })

        exports.cari = (data) =>
    new Promise((resolve, reject) =>{
        jadwalpesawat.findOne({
            kotaasal: data.kotaasal
        }).then((pesawat) =>{
            if (pesawat){
                if (data.kotatujuan,pesawat.kotatujuan){
                    resolve({
                        sukses:true,
                        Pesan: 'Berhasil Login',
                        data: pesawat
                    })
                }else{
                    reject({
                        sukses: false,
                        Pesan: 'Password Salah'
                    })
                }
            }else{
                reject({
                    sukses: false,
                    Pesan: 'Username Tidak Terdaftar'
                })
            }
        })
    })