const userModel = require('../model/user')
const bcrypt = require('bcrypt')

exports.register = (data) =>
    new Promise((resolve, reject) =>{
        userModel.findOne({
            username: data.username
        }).then(user =>{
            if (user){
                reject({
                    sukses: false,
                    Pesan: 'Username Sudah Terdaftar'
                })
            } else{
                bcrypt.hash(data.password, 10, (err, hash) =>{
                    data.password = hash
                    userModel.create(data)
                    .then(() =>{
                        resolve({
                            sukses: true,
                            Pesan: 'Berhasil Registrasi'
                        })
                    }).catch(() =>{
                        reject({
                            sukses: false,
                            Pesan: 'Gagal Registrasi'
                        })
                    })
                })
            }
        })
    })

exports.login = (data) =>
    new Promise((resolve, reject) =>{
        userModel.findOne({
            username: data.username
        }).then((user) =>{
            if (user){
                if (bcrypt.compareSync(data.password,user.password)){
                    resolve({
                        sukses:true,
                        Pesan: 'Berhasil Login',
                        data: user
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