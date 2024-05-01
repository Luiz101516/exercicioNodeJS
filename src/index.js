import express from 'express'
import usersController from './controllers/user.js'
import databaseConnection from './utils/database.js'

const app = express()
app.use(express.json())
const port = 3000

app.get("/", (request, response) => {
  response.status(200).send("Bem vindo à API de Usuários!")
})

app.use('/user', usersController)

app.listen(port, async () => {
  await databaseConnection()
  console.log(`App running in http://localhost:${port}`)
})