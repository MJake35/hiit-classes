const express = require('express') // import express package
const morgan = require('morgan')
require('dotenv').config()      // importing the dot env file
const bodyParser = require('body-parser')

const app = express()       // creating an instance of express (class)
const PORT = process.env.PORT       // using the dot env file

// Middlewares
app.use(morgan('dev'))
// app.use((req, res, next) => {
//     console.log('Request made')

//     next()
// })
app.use(bodyParser.json())      // used to identify the body of a request


app.get('/', (req, res) => {
    res.status(200).send('This is the Homepage')
})

app.get('/about', (req, res) => {
    res.status(200).send('This is the About')
})

app.post('/contact', (req, res, next) => {
    const { first_name, last_name, email, phone, body } = req.body

    try {
        if (!first_name) throw Error('Input your first name')
        if (!last_name) throw Error('Input your last name')
        if (!email) throw Error('Input your email address')
        if (!phone) throw Error('Input your phone number')
        if (!body) throw Error('Input the message body')
        res.status(200).json({ message: 'Your enquiry has been recorded. We will reach out to you shortly.' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.get('/terms', (req, res) => {
    res.status(200).send('This is the Terms')
})


// app.use((req, res) => {
//     res.status(404).send('This is the 404')
// })


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})