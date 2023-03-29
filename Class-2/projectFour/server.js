// const os = require('os')

// console.log(os)
// console.log('The current directory is ' + __dirname)
// console.log('The current file is ' + __filename)

// console.log('Welcome to NodeJS Class')

// console.log(2 + 5)

const http = require('http')
const fs = require('fs')

// to create the server         https://dev.mysql.com/downloads/windows/
const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Type', 'text/html')

    switch (req.url) {
        case '/':
            fs.readFile('./views/index.html', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
                res.write(data);
                res.end();
            })
            break;
        case '/login':
            // res.write('Login Page')
            res.write('<h1>Login</h1>')
            res.write('<p>Login to our website</p>')
            // res.statusCode(200)
            res.end()
            break;
        case '/create':
            // res.write('Create Account page')
            res.write('<h1>Sign up</h1>')
            res.write('<p>Sign up to our website</p>')
            // res.statusCode(200)
            res.end()
            break;
        case '/about':
            fs.readFile('./views/aboutUS.html', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
                res.write(data);
                res.end();
            })
            break;
        case '/contact':
            fs.readFile('./views/contact.html', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
                res.write(data);
                res.end();
            })
            break;
        case '/terms':
            fs.readFile('./views/termAndCondition.html', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
                res.write(data);
                res.end();
            })
            break;
        default:
            // res.write('404 page')
            res.write('<h1>404</h1>')
            res.write('<p>Oops! The content is not found</p>')
            // res.statusCode(404)
            res.end()
    }
})

// listen for request

server.listen(3000, 'localhost', () => {
    console.log('Listening of port 3000')
})
