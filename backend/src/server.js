const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()

app.use(cors())
require('dotenv').config()
require('./database')

app.listen(process.env.PORT || 3000)
app.use(express.json())
app.use(routes)