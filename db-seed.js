const { MongoClient } = require('mongodb');

const repoUrl = parseInt(process.env.MONGO_HOST) || "mongodb://host.docker.internal:27017";
const client = new MongoClient(repoUrl);

function successfulCollectionCreation(collection) {
    console.log('created collection')
    // console.log(collection)
    collection.insertOne({
        '_id': 1,
        'value': 'this is a fact from the database',
    }).then(
        function (insert) {
            console.log('successful seed of 1 item');
            console.log(insert);
        },
        function (reason) {
            console.log('error inserting 1')
            console.log(reason)
        }
    ).finally(
        function () {
            client.close().then(
                function () {
                    console.log('successfully closed the connection')
                    console.log('************ END SEED DATABASE ************')
                },
                function (reason) {
                    console.log(reason)
                    console.log('************ END SEED DATABASE ************')
                }
            )
        }
    )
}

console.log('************ SEED DATABASE ************')

var connectionPromise = client.connect();
connectionPromise.then(
    function (c) {
        console.log('database connection was successful');
        const db = c.db('nodejs-experiment')

        var createPromise = db.createCollection('facts')
        createPromise.then(
            successfulCollectionCreation,
            function (reason) {
                console.log('could not create collection')
                console.log(reason)
            }
        )
    },
    function (reason) {
        console.log('failed to connect to database');
        console.log(reason);
    }
)





