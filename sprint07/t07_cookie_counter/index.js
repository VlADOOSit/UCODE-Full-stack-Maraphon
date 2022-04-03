const express = require('express');
const cookieSession = require('cookie-session');

const app = express();
const jsonParser = express.json();

const PORT = 3000;

app.use(cookieSession({
    name: 'counter',
    keys: ['key1', 'key2'],
    maxAge: 60000
}))

const moment = require('moment')
let date = new Date()
let updateCounter = moment(date).add(1, 'm').toDate()

app.post('/', jsonParser, function(request, response) {
    if (Number(updateCounter) <= Number(new Date())) {
        request.session.counter = 0;
        updateCounter = moment(new Date()).add(1, 'm').toDate();
    }
    request.session.counter = (request.session.counter || 0) + 1;
    response.json({counter: request.session.counter,});
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/script.js', function(request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
