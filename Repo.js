const { MongoClient } = require('mongodb');

const repoUrl = parseInt(process.env.MONGO_HOST) || "mongodb://host.docker.internal:27017";
const client = new MongoClient(repoUrl);
// client.connect();
var connectionPromise = client.connect();
connectionPromise.then(
    function (c) {
        console.log('repo database connection was successful');
    },
    function (reason) {
        console.log('repo failed to connect to database');
        console.log(reason);
    }
)

function DoSomething() {
    console.log('DoSomething gosh darns')
    const factCollection = client.db('nodejs-experiment').collection('facts');
    return factCollection.find({}).toArray();
}
module.exports.DoSomething = DoSomething;