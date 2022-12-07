const express = require('express')
const app = express()
const {connect} = require('./mongo')
const cors = require('cors')

const port = 5000

app.use(cors())

app.get('/api', async (req,res) => {
    const data = await connect()
    res.json(data)
})

app.use(express.json())

app.listen(port,() => {
    console.log('Listening on port 5000')
})