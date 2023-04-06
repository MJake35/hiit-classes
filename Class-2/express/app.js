const express = require('express') // import express package
const morgan = require('morgan')
require('dotenv').config()      // importing the dot env file
const bodyParser = require('body-parser')
const db = require('./config/db')
const timestamp = require('./middlewares/timestamp')
const cors = require('cors')

const app = express()       // creating an instance of express (class)
const PORT = process.env.PORT       // using the dot env file


// Middlewares
app.use(morgan('dev'))
// app.use((req, res, next) => {
//     console.log('Request made')

//     next()
// })
app.use(bodyParser.json())      // used to identify the body of a request

app.use(
    cors({
        origin: [`https://localhost:${PORT}`, 'https://hiit-contact.onrender.com'],
        credentials: true
    })
)


app.get('/', (req, res) => {
    res.status(200).send('This is the Homepage')
})

app.get('/about', (req, res) => {
    res.status(200).send('This is the About')
})

app.post('/contact', async (req, res, next) => {
    const { first_name, last_name, email, phone, body } = req.body

    try {
        if (!first_name) throw Error('Input your first name')
        if (!last_name) throw Error('Input your last name')
        if (!email) throw Error('Input your email address')
        if (!phone) throw Error('Input your phone number')
        if (!body) throw Error('Input the message body')
        const created_at = await timestamp()

        let sql = `
        INSERT INTO enquiries 
        (first_name, last_name, email, phone, body, created_at) 
        VALUES (
            '${first_name}', '${last_name}', '${email}', '${phone}', '${body}', '${created_at}')
        `
        await db.execute(sql)
        res.status(200).json({ message: 'Your enquiry has been recorded. We will reach out to you shortly.' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.get('/getInfo/:id', async (req, res) => {

    const { id } = req.params

    try {

        let sql = `SELECT first_name, last_name, email, phone, body FROM enquiries WHERE id='${id}'`

        const [user] = await db.execute(sql)

        if (user[0]) {
            res.status(200).json(user[0])
        }
        else {
            res.status(200).json({ user: 'User does not exist' })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }


})

app.put('/editUser/:id', async (req, res) => {

    const { id } = req.params
    const { first_name, last_name, email, phone, body } = req.body


    try {
        if (!first_name) throw Error('Input your first name')
        if (!last_name) throw Error('Input your last name')
        if (!email) throw Error('Input your email address')
        if (!phone) throw Error('Input your phone number')
        if (!body) throw Error('Input the message body')
        const updated_at = await timestamp()

        let sql = `
        UPDATE enquiries SET
        first_name = '${first_name}', last_name = '${last_name}', 
        email = '${email}', phone = '${phone}', 
        body = '${body}', updated_at = '${updated_at}'
        WHERE id = '${id}'
        `
        await db.execute(sql)
        res.status(200).json({ message: 'Your info has been updated. Thank you.' })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

app.patch('/editUser/:id', async (req, res) => {

    const { id } = req.params
    const { first_name } = req.body


    try {
        if (!first_name) throw Error('Input your first name')

        const updated_at = await timestamp()

        let sql = `
        UPDATE enquiries SET
        first_name = '${first_name}', updated_at = '${updated_at}'
        WHERE id = '${id}'
        `
        await db.execute(sql)
        res.status(200).json({ message: 'Your info has been updated. Thank you.' })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

app.delete('/deleteUser/:id', async (req, res) => {
    const { id } = req.params

    try {

        let sql = `DELETE FROM enquiries WHERE id='${id}'`

        await db.execute(sql)
        res.status(200).json({ message: 'Your Account has been deleted' })


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

