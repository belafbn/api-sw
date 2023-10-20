const express = require('express')
const swaggerUi = require('swagger-ui-express')

//importa documentação do swagger
const swaggerDocs = require('./src/docs/swagger.json')

require("./connection");
require("./src/models/Books")


// cria o servidor
const app = express()

// configurações do servidor
const cors = require('cors')
app.use(express.json())
app.use(cors())


// usa a documentação do swagger (acessivel na rota /docs)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// define as rotas
const routes = require("./src/routes")
app.use("/", routes)

// roda o servidor na porta 3000
app.listen(3000, () => {
  console.log('server funcionando')
})
// http://localhost:3000/
