const mongoose = require("mongoose");


// cria a estrutura que o livro vai ter
// semelhante a uma tabela no banco
const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
  },
  nacionality: {
    type: String,
    required: true
  }
})

mongoose.model("Books", BooksSchema)