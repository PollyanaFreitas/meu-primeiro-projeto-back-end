const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Polyana Freitas',
        imagem: 'https:www.instagram.com/pollyanafreitass/',
        minibio: 'Desenvolvedora de Sistemas'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://www.instagram.com/p/Cpm2h7tOeqP/',
        minibio: 'Desenvolvedora e Instrutora'  
    },
    {
        nome: 'Iana Chan',
        imagem:'https://www.instagram.com/p/CpJJy7HPicL/',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://www.instagram.com/p/CqeDCJipXMo/',
        minibio: 'Hacker antirracista'
    },
    {
        nome:'Attekita Dev',
        imagem: 'https://www.instagram.com/p/CfWedCeOroL/',
        minibio:'Criadora de conteúdo sobre tecnologia'
    }

]


function mostraMulheres(request, response) {
    response.json(mulheres)
 }


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ",porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostraPorta)
