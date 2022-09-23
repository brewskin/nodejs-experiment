var finalhandler = require('finalhandler')
var http = require('http')
var Router = require('router')
var fs = require('fs')

const port = 3000

var router = Router()
// routes
var home = router.route('/')
var newRoute = router.route('/projects.html')

home.get(function (req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    fs.createReadStream('index.html').pipe(res)
})

newRoute.get(function (req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Welcome to the Testing World!')
})

var server = http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
})

server.listen(port, "localhost")