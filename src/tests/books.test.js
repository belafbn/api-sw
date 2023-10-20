test('buscar livros', () => {

  // busca todos livros da api
  fetch('http://localhost:3000/books')
    // espera resposta e transforma em json
    .then((resposta) => resposta.json())
    // obtem a resposta com o dados prontos
    .then((json) => {
      // verifica se o "tipo do dado" da resposta é um objeto (array)
      expect(typeof json.data).toBe('object')
    })

})


test('cadastrar livro', () => {

  // faz uma requisição post para criar um livro
  fetch('http://localhost:3000/books', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "titulo do teste",
      author: "autor do teste",
      publisher: "editora do teste",
      year: 2023,
      nacionality: "Brasil"
    })
    // espera resposta e verifica se o status recebido é 201 (created)
  }).then((resposta) => expect(resposta.status).toBe(201))
})