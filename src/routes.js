// todas as rotas da api
const express = require('express')

const routes = express.Router();

const booksController = require('./controllers/BooksController')

// rota para criar um livro
routes.post("/books", booksController.createBook)

// rota para buscar todos livros
routes.get("/books", booksController.getBooks)

// rota para buscar um livro específico por id
routes.get("/books/:id", booksController.getBook)

// rota para excluir um livro
routes.delete("/books/:id", booksController.deleteBook)

// rota para editar um livro
routes.put("/books/:id", booksController.updateBook)



module.exports = routes