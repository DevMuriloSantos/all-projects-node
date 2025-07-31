const express = require('express') // import express from 'express' - forma mais moderna
const port = 3000

const app = express() // coloca o express dentro da variavel app

app.get('/users', (request, response) => { // '/users' - é a rota que eu criei

    const { name, age } = request.query // filtra e retorna apenas o que eu desejo

    console.log(name, age)

    return response.json({name, age}) // servidor responde com json

}) // cria uma rota para quando a pessoa chamar localhost:3000/users, a aplicação retornar Hello Node

app.listen(port, () => { // eu posso mandar o server executar um função quando rodar

    console.log(`Server started on port ${port}`)

}) // aplicação rodando na porta 3000

// npm run dev para rodar o servidor
// ctrl + c para parar de rodar o servidor

// tudo isso é um servidor

/*Query params => são filtros ?nome=murilo&age=18*/