const express = require('express')
const port = 3000

const app = express()

app.get('/users/:id', (request, response) => { /* :id é a variavel que ele cria ao chegar um determinado valor */

    const { id } = request.params // é a onde está armazenado o meu id
    console.log(id)
    
    return response.json({id})
})

app.listen(port, () => {

    console.log(`Server started on port ${port}`)

}) // aplicação rodando na porta 3000

/*Query params => são filtros ?nome=murilo&age=18*/
/*Route params => bucar, deletar, atualizar - ex: /users/2 */