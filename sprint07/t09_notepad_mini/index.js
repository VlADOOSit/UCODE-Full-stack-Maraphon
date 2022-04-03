const express = require('express');
const Note = require('./Note.js')
const NotePad = require('./NotePad.js')

const app = express();
const jsonParser = express.json();

const PORT = 3000;

app.post('/', jsonParser, function(request, response) {
    let files = new NotePad()
    if (files.hasFiles())  {
        response.json({list: files.getHTMLList()});
    }
});

app.post('/create', jsonParser, function(request, response) {
    let note = new Note(request.body.strName, request.body.imt);
    note.write(request.body.content);

    let list = new NotePad();

    response.json({list: list.getHTMLList()})
});

app.post('/read', jsonParser, function(request, response) {
    let list = new NotePad();
    response.json({list: list.getJsonList(request.body.filename)});
});

app.post('/delete', jsonParser, function(request, response) {
    let list = new NotePad();
    list.delete(request.body.filename);
    response.json({list: list.getHTMLList()})
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
