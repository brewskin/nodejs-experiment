var express = require('express');

const app = express();
const facts = require('./facts');
const judgements = require('./judgements');
const port = parseInt(process.env.PORT) || 8080;

app.get('/', (req, res) => {
    res.send('Hello And Welcome to My World!');
});
app.use((req, res, next) => {
    res.contentType('application/json')
    console.log('Time: ', Date.now());
    next()
});

app.use('/topics', facts);
app.use('/judgements', judgements);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});