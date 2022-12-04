const express = require('express');
const err = require('./errors')

const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
    res.status(400).json(err.notImplemented).end();
});

module.exports = router;