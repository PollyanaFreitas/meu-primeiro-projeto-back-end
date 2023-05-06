const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Polyana de Freitas',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQHvIaN5a2vzZw/profile-displayphoto-shrink_100_100/0/1639733520464?e=1688601600&v=beta&t=Dj2aoNe4XLcSJk9lV9oKJ36fDihDRd1qehyhrlwQDiE',
        minibio:'Desenvolvedora de sistemas'
      
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ",porta)
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta, mostraPorta)



