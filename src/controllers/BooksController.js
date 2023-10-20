const mongoose = require('mongoose')

const BooksModel = mongoose.model("Books")


// FUNÇÃO QUE É CHAMADA QUANDO ACESSAR A ROTA DE CRIAÇÃO DE LIVRO
const createBook = async (request, response) => {
  console.log(request.body)
  try {
    // cria um livro através da função disponibilizada pelo MongoDB
    const book = await BooksModel.create(request.body)

    // retorna uma resposta para a requisição feita com um status e o livro criado
    return response.status(201).json(book)
  } catch (err) {
    // caso dê algo errado, retorna uma resposta com erro 400 e uma mensagem indicando erro
    return response.status(400).json({ erro: "Não foi possível incluir: " + err })
  }
}

// FUNÇÃO QUE É CHAMADA QUANDO ACESSAR A ROTA DE BUSCAR LIVROS
const getBooks = async (request, response) => {
  console.log(request.params)
  try {

    const books = await BooksModel.find();

    console.log(books)

    return response.status(200).json({ data: books })

  } catch (err) {
    return response.status(400).json({ erro: "Não foi possível buscar: " + err })
  }
}

// FUNÇÃO QUE É CHAMADA QUANDO ACESSAR A ROTA DE BUSCAR UM LIVRO ESPECÍFICO
// essa rota recebe um ID como parametro (request.params.id)
//65201ac022edfbf983bbcf24
const getBook = async (request, response) => {
  console.log(request.params)
  try {
    // busca um livro no MongoDB utilizando o ID que chegou como parâmetro
    const book = await BooksModel.findById(request.params.id);

    console.log(book)

    // retorna um status 200 caso tenha dado certo e o livro encontrado
    return response.status(200).json({ data: book })

  } catch (err) {
    return response.status(400).json({ erro: "Não foi possível buscar: " + err })
  }
}

// FUNÇÃO QUE É CHAMADA QUANDO ACESSAR A ROTA DE EXCLUSÃO DE LIVRO
// essa rota recebe um ID como parametro (request.params.id)
const deleteBook = async (request, response) => {
  console.log(request.params)
  try {

    const book = await BooksModel.findByIdAndDelete(request.params.id);

    console.log(book)

    return response.status(200).json({message: "Excluído com sucesso" })

  } catch (err) {
    return response.status(400).json({ erro: "Não foi possível excluir: " + err })
  }
}

// FUNÇÃO QUE É CHAMADA QUANDO ACESSAR A ROTA DE ATUALIZAR UM LIVRO
// essa rota recebe um ID como parametro (request.params.id)
const updateBook = async (request, response) => {
  console.log(request.params)
  try {

    const book = await BooksModel.findByIdAndUpdate(request.params.id, request.body);

    console.log(book)

    return response.status(200).json({ message: "Editado com sucesso" })

  } catch (err) {
    return response.status(400).json({ erro: "Não foi possível excluir: " + err })
  }
}

// exporta todas funções criadas
module.exports = {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook
}