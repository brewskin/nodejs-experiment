const express = require('express');
const err = require('./errors')

const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
    res.status(400).json(err.notImplemented).end();
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