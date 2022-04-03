const express = require('express');

const app = express();
//const jsonParser = express.json();

const PORT = 3000;

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/style.css', function(request, response) {
    response.sendFile(__dirname + '/style.css');
});

app.get('/script.js', function(request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
