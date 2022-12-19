const express = require('express');
const err = require('./errors')
const repo = require('./Repo')

const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
    repo.GetAllFacts().then(function (doc) {
        res.status(200).json(doc).end();
    },
        function (reason) {
            console.log(reason)
            res.status(500).json(err.internalError).end();
        }
    )

});

// define the home page route
router.get('/:identifier', (req, res) => {
    const identifier = req.params.identifier;
    repo.GetFact(identifier).then(
        function (doc) {
            console.log(doc)
            if (doc === null) {
                res.status(404).json(err.notFound).end();
                return;
            };
            res.status(200).json({
                id: `${doc._id}`,
                value: `${doc.value}`
            }).end();
        },
        function (reason) {
            console.log(reason)
            res.status(500).json(err.internalError).end();
        }
    );
});

module.exports = router;