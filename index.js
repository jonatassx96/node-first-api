const express = require('express')
const port = 3001

const app = express()
app.get('/users', (request, response) => {
    return response.send('Hello node!')
})
app.listen(port, () =>{
    console.log(`Server started on port ${port}.`)
})

//TESTE GIT
