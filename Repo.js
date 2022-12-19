const { MongoClient } = require('mongodb');

const repoUrl = parseInt(process.env.MONGO_HOST) || "mongodb://host.docker.internal:27017";
const client = new MongoClient(repoUrl);
// client.connect();
var connectionPromise = client.connect();
connectionPromise.then(
    function (c) {
        console.log('database connection was successful');
        // c.insertOne({
        //     name: 'thingy',
        //     kind: 'fish'
        // });
    },
    function (reason) {
        console.log('failed to connect to database');
        //console.log(reason);
    }
)

function DoSomething() {
    console.log('DoSomething gosh darns')
    // interface Pet {
    //     name: string;
    //     kind: 'dog' | 'cat' | 'fish';
    // }

    // const pets = client.db().collection < Pet > ('pets');
    // const pets = client.db().collection('pets');

    // const petCursor = pets.find();

    // for await (const pet of petCursor) {
    //     console.log(`${pet.name} is a ${pet.kind}!`);
    // }
}
module.exports.DoSomething = DoSomething;