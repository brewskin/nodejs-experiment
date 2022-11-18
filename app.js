var finalhandler = require('finalhandler')
var http = require('http')
var Router = require('router')
var fs = require('fs')

const port = parseInt(process.env.PORT) || 8080;

var router = Router()
// routes
var home = router.route('/')
var newRoute = router.route('/projects.html')


function handleHome(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // fs.createReadStream('index.html').pipe(res)
    var str = "We're noobs at coding, but we're on our way up!"
    let ranString = rollIt()
    res.write(str)

    // const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64')

    // // Writing the buffer data.
    // res.write(buf, 'utf8', function() {
    //     console.log("Writing Buffer Data...")
    // });

    // // Creating buffer
    // const buff = Buffer.from(' hello world', 'utf8')

    // // Writing the buffer data.
    // res.write(buff, 'utf8', function () {
    //     console.log("Writing Buffer Data...")
    // })

    // Prints Output on the browser in response
    res.write('<br></br>')
    res.write(ranString)
    res.write('<br></br>')
    res.end(' ok')
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
