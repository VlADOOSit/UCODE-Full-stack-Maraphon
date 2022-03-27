const express = require('express');
const File = require('./File');
const FileList = require('./FileList');

const app = express();
const jsonParser = express.json();

const PORT = 3000;

app.post('/', jsonParser, function(request, response) {
    let files = new FileList()
    if (files.hasFiles())  {
        response.json({list: files.getHTMLList()});
    }
});

app.post('/create', jsonParser, function(request, response) {
    let files = new FileList()
    let file = new File(request.body.str);
    file.write(request.body.content);
    response.json({list: files.getHTMLList()});
});

app.post('/read', jsonParser, function(request, response) {
    let str = (new File(request.body.filename)).read();

    response.json({ filename: request.body.filename,
                    content: str});    
});

app.post('/delete', jsonParser, function(request, response) {
    let file = new File(request.body.del);
    let files = new FileList();

    file.delete();

    if (files.hasFiles())  {
        response.json({list: files.getHTMLList()});
    }
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get("/script.js", function(request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});

