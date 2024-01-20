const moment = require('moment');


const requestTime = function (request, response, next){
    // Mendapatkan waktu saat ini dalam bentuk objek Date
    const currentTime = moment()
    // Mengubah format waktu sesuai keinginan (contoh: HH:mm:ss)
    const formattedTime = currentTime.format('DD/MM/YYYY HH:mm:ss')
    // Menambahkan properti requestTime ke objek request dengan nilai waktu yang diformat
    request.requestTime = formattedTime
    next()
  }
  

module.exports = {requestTime}