// const os = require('os')

// // console.log(os.version)
// console.log('The current directory is ' + __dirname)
// console.log('The current file is ' + __filename)

// // console.log('Welcome to NodeJS Class')

// // console.log(2 + 5)

const http = require('http')

// to create the server
const server = http.createServer((req, res) => {
    console.log('Request Made')
    res.write('Request Made to the server on the backend')
    res.end()
})

// listen for request

server.listen(3000, 'localhost', () => {
    console.log('Listening of port 3000')
})
