const express = require('express')
const bodyParse = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

usersRoute(app)

app.get('/', (req, res) => res.send('Olá mundo!'))

app.listen(port, () => console.log(`Express rodando na porta ${port}`)) 
