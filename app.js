var finalhandler = require('finalhandler')
var http = require('http')
var Router = require('router')
var fs = require('fs')
var utils = require('util')

const port = parseInt(process.env.PORT) || 8080;

var router = Router()
// routes
var home = router.route('/')
var newRoute = router.route('/projects.html')


function handleHome(req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    var payload = '<html> <head> <script src=\"https://unpkg.com/react@17/umd/react.development.js\"></script> <script src=\"https://unpkg.com/react-dom@17/umd/react-dom.development.js\"></script> <script src=\"https://unpkg.com/babel-standalone@7.10.0/babel.min.js\"></script> </head> <body> <div id=\"root\"></div> <script type=\"text/babel\"> %s </script> </body> </html>'
    var reactFile = fs.readFileSync('square.js')
    res.write('OMFG')
    res.write(utils.format(payload, reactFile))
    res.end()
}
home.get(handleHome)
newRoute.get(function (req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Welcome to the Testing World!')
})

const strings = ['sup', 'hey', 'sgud', 'waguan', 'wuss gucci', 'how goes', 'whatup', 'wazzupppp', 'how r u', 'yalla'];
function rollIt() {
    let ranString = strings[Math.floor(Math.random() * 10)]
    return ranString
}


var server = http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
})

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});
