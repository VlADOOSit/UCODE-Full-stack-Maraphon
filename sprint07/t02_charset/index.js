const express = require('express');
const iconv = require('iconv-lite');

const app = express();
const jsonParser = express.json();

const PORT = 3000;

app.post('/', jsonParser, function (request, response) {
    let utf = '';
    let iso = '';
    let win = '';

    if(request.body.optArr[0]) {
        utf = request.body.str;
    }
    if(request.body.optArr[1]) {
        iso = iconv.encode(iconv.decode(request.body.str, 'utf8'), 'iso-8859-1').toString();
    }
    if(request.body.optArr[2]) {
        win = iconv.encode(iconv.decode(request.body.str, 'utf8'), 'cp1252').toString();
    }

    response.json({ input: request.body.str,
                    utf: utf,
                    iso: iso,
                    win: win});


});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/script.js', function (request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
