const { MongoClient, ObjectId } = require('mongodb');

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

function GetAllFacts() {
    console.log('getting all facts')
    const factCollection = client.db('nodejs-experiment').collection('facts');
    return factCollection.find({}).toArray();
}

function GetFact(id) {
    searchID = new ObjectId(id)
    console.log('getting fact: ', searchID.toString())

    const factCollection = client.db('nodejs-experiment').collection('facts');
    return factCollection.findOne({ "_id": searchID });
}

module.exports.GetAllFacts = GetAllFacts;
module.exports.GetFact = GetFact;