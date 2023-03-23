// const os = require('os')

// console.log(os)
// console.log('The current directory is ' + __dirname)
// console.log('The current file is ' + __filename)

// console.log('Welcome to NodeJS Class')

// console.log(2 + 5)

const http = require('http')

// to create the server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')

    switch (req.url) {
        case '/':
            res.write('Homepage')
            res.statusCode(200)
            res.end()
            break;
        case '/login':
            res.write('Login Page')
            res.statusCode(200)
            res.end()
            break;
        case '/create':
            res.write('Create Account page')
            res.statusCode(200)
            res.end()
            break;
        case '/about':
            res.write('About us page')
            res.statusCode(200)
            res.end()
            break;
        default:
            res.write('404 page')
            res.statusCode(404)
            res.end()
    }
})

// listen for request

server.listen(3000, 'localhost', () => {
    console.log('Listening of port 3000')
})
