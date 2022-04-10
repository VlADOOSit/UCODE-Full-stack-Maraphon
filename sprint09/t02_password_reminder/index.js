const express = require('express');
const User = require('./models/user');

const app = express();
const jsonParser = express.json();
const mysql = require('./db.js');

const PORT = 3000; 



app.post('/password', jsonParser, function(request, response) {
    console.log(request.body);
    if (request.body.email == '') {
        response.json({ans: 'All input!'});
    }

    else {
        let user = new User(request.body.email);
        user.findAndSend(response);
    };

});

app.get('/password', function(request, response) {
    response.sendFile(__dirname + '/views/password.html');
});


app.get('/style.css', function (request, response) {
    response.sendFile(__dirname + '/public/style.css');
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
