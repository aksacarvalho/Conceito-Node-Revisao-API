import express from 'express'

const app = express()
app.use(express.json())

app.get('/usuarios/:abacate', (req, res) => {
    console.log(req)

   res.send("olá")
})

app.post('/usuarios', (req, res) => {
   console.log(req)

   res.send("ola")
})

app.listen(3000)