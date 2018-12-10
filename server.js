const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const linksOnTerminal = require('links-on-terminal');

const app = express();

app.get('/js/index.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/js/index.js'));
});

app.get('/cs/index.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.css'));
});

app.get('/index', (request, response) => {
    console.log(`Received a ${request}`);
    response.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(2611, () => {
    console.log(linksOnTerminal('Server running at 2611', 'http://localhost:2611/index'));
});