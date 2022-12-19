const { Mongo } = require('mongodb');

client = Mongo()
const repoUrl = parseInt(process.env.MONGO_HOST) || "mongodb://127.0.0.1:27017";
const client = new MongoClient(repoUrl);



function DoSomething() {

    await client.connect();

    interface Pet {
        name: string;
        kind: 'dog' | 'cat' | 'fish';
    }

    const pets = client.db().collection < Pet > ('pets');

    const petCursor = pets.find();

    for await (const pet of petCursor) {
        console.log(`${pet.name} is a ${pet.kind}!`);
    }
}
module.exports.DoSomething = DoSomething;