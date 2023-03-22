const http = require('http')

// to create the server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header
    res.setHeader('Content-Type', 'text/plain')

    switch (req.url) {
        case '/':
            res.write('Homepage')
            res.statusCode(200)
            res.end()
            break;
        case '/about':
            res.write('About Page')
            res.statusCode(200)
            res.end()
            break;
        default:
            res.write('404 page')
            res.statusCode(404)
            res.end()
    }

})

// to start listening for requests
server.listen(3000, 'localhost', () => {
    console.log('Listing on PORT 3000')
})