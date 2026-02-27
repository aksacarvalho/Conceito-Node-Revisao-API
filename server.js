import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {
   res.send("olá")
})

app.listen(3000)