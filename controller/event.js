const eventcontrol = require('../model/event')
const objectId = require('mongoose').Types.ObjectId

exports.tampiljadwal = () =>
  new Promise((resolve, reject) => {
    eventcontrol.find()
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

exports.simpanjadwal = (data) =>
  new Promise((resolve, reject) => {
    eventcontrol.create(data)
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

  exports.hapusjadwal = (id) =>
  new Promise((resolve, reject) => {
      eventcontrol.deleteOne({
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

  exports.tampilkansatu = (id) =>
  new Promise((resolve, reject) => {
      eventcontrol.find({
        _id: objectId(id)
      }).then((data) => {
          resolve({
              data: data
          })
      }).catch(() => reject ({
          sukses: false,
          pesan: 'Gagal Memuat Data'
      }))
  })

  exports.editjadwal = (data, id) =>
  new Promise((resolve, reject) => {
      eventcontrol.updateOne({
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