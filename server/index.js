const express = require('express')
const path = require('path')
const api = require('./api')
const config = require('../config')

const app = express()

const port = process.env.NODE_ENV === 'development' 
  ? config.developmentPort
  : config.port

app.use('/api', api)
app.use('/', express.static(path.resolve('dist')))
app.use('*', (req, res) => res.sendFile(path.resolve('dist', 'index.html')))

app.listen(port)

console.log(`Express server listening on port ${port}`)
