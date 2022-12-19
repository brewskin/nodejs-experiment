const express = require('express');
const err = require('./errors')
const repo = require('./Repo')

const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
    repo.DoSomething().then(function (doc) {
        res.status(200).json(doc).end();
    },
        function (reason) {
            res.status(500).json(err.internalError).end();
        }
    )

});

// define the home page route
router.get('/:identifier', (req, res) => {
    var identifier = req.params.identifier;
    res.status(200).json({
        id: identifier,
        value: 'node js is fun'
    }).end();
});

module.exports = router;