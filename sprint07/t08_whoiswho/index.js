const express = require('express');
const CSVParser = require('./parseCSV.js');

const app = express();
const jsonParser = express.json();

const PORT = 3000;

app.post('/', jsonParser, async function(request, response) {
    console.log(request.body.filter);
    let res = request.body.myFile.split('\\');
    const words = await CSVParser.parseCSV(res[res.length - 1]);
    let keys = Object.keys(words[0]);

    let headHTML = '';

    for (let i = 0; i < keys.length; i++) {
        headHTML += `<th>${keys[i]}</th> `;
    }

    let bodyHTML = '';
        
    for (let i = 0; i < words.length; i++) {
        let val = Object.values(words[i]);
        
        bodyHTML += `<tr>`;
        for (let j = 0; j < val.length; j++) {
            if (request.body.filter != 'None' && words[i].Alignment == request.body.filter) {
                bodyHTML += `<td>${val[j]}</td>`;
            }
            if (request.body.filter == 'None') {
                bodyHTML += `<td>${val[j]}</td>`;
            }
            
        }
        bodyHTML += `</tr>`;
    } 

    response.json({ headHTML: headHTML, bodyHTML: bodyHTML,});
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
