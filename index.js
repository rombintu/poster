// IMPORTS
require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

// LOCALS
const PORT = process.env.PORT || 5000
const router_index = require('./routes/index_router')
const router_user = require('./routes/user_router')
const router_post = require('./routes/post_router')
const database = require('./database/connect')

// APP
const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})


// USE
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
// app.use(express.json())
app.use('/', router_index)
app.use('/', router_user)
app.use('/', router_post)

app.use(express.static(path.join(__dirname, '/pablic')))

async function start() {
    try {
        await database.authenticate()
        await database.sync()
        console.log("CONNECTION OK!")
        app.listen(PORT, () => {
            console.log(`RUN ON http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(`ERROR: ${err}`)
    }
}

start()