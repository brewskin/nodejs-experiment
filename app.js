var finalhandler = require('finalhandler')
var http = require('http')
var Router = require('router')

const port = 3000

var router = Router()
// routes
var home = router.route('/')
var newRoute = router.route('/testing123')

home.get(function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hello World!')
})

newRoute.get(function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Welcome to the Testing World!')
})

var server = http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
})

server.listen(port, "localhost")