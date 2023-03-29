const express = require('express') // import express package
const morgan = require('morgan')
require('dotenv').config()      // importing the dot env file

const app = express()       // creating an instance of express (class)
const PORT = process.env.PORT       // using the dot env file

// Middlewares
app.use(morgan('dev'))
app.use((req, res, next) => {
    console.log('Request made')

    next()
})


app.get('/', (req, res) => {
    res.status(200).send('This is the Homepage')
})

app.get('/about', (req, res) => {
    res.status(200).send('This is the About')
})

app.get('/contact', (req, res) => {
    res.status(200).send('This is the Contact')
})

app.get('/terms', (req, res) => {
    res.status(200).send('This is the Terms')
})


app.use((req, res) => {
    res.status(404).send('This is the 404')
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})