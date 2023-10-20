const mongoose = require('mongoose')


// cria conexão com o MongoDB
module.exports = mongoose.connect('mongodb+srv://isafbn:l9m0aKtaFJqTWODg@cluster0.lqi1rvl.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')
  .then(() => {
    console.log("conectou no banco")
  })
  .catch(err => console.log(err))

