import express from 'express'
import {v4 as uuidv4} from 'uuid' // biblioteca - gerador de id's /- forma mais atualizada

const port = 3000

const users = []
const app = express()

app.use(express.json())


app.get('/users', (request, response) => {

    return response.json(users) // retorna todos os users
})

app.post('/users', (request, response) => {
    const {name, age} = request.body

    const user = { id: uuidv4(), name, age }

    users.push(user) // add o user ao array
    
    return response.status(201).json(users) /* retorna o status 201 - quer dizer que foi criado com sucesso */
})

app.put('/users/:id', (request, response) => { // atualiza informações
    
    const { id } = request.params // pega o id do user -- route params
    const { name, age } = request.body

    const updateUser = { id, name, age }

    const index = users.findIndex(user => user.id === id) /* se o id do user for igual ao do array, ele retorna o indice */

    if (index < 0) { // se o id não existir no array, ele retorna erro 404
        return response.status(404).json({message: 'User not found'})
    }

    users[index] = updateUser // atualiza a informação desejada

    return response.json(updateUser)
})

app.delete('/users/:id', (request, response) => { // deleta users

    const { id } = request.params // pega o id do user -- route params

    const index = users.findIndex(user => user.id === id) /* se o id do user for igual ao do array, ele retorna o indice */

    if (index < 0) { // se o id não existir no array, ele retorna erro 404
        return response.status(404).json({message: 'User not found'})
    }

    users.splice(users[index], 1) // deleta o user

    return response.status(204).json(users)
})



app.listen(port, () => {

    console.log(`Server started on port ${port}`)

})
