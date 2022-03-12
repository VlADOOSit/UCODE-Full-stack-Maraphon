const express = require('express');

const app = express();

const jsonParser = express.json();

const POST = 3000; 

app.post('/', jsonParser, function (request, response) {
    //console.log(request.body)
    if (!request.body) {
        return response.sendStatus(400);
    } 
    if (request.body.answer === '3') {
        response.json({answer: 'Correct!'});
    }
    else {
        response.json({answer: 'Shame on you! Go and watch Avengers!'}); 
    }
});

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/script.js', function (request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.listen(POST, () => {
    console.log(`Server start on http://localhost:${POST}`);
});
