const express = require('express');
const User = require('./models/user');

const app = express();
const jsonParser = express.json();

const PORT = 3000; 

app.post('/reg', jsonParser, function(request, response) {
    console.log(request.body);

    if (request.body.login == '' || request.body.pass == '' || request.body.fullName == '' || request.body.email == '') {
        response.json({ans: 'All input!'});
    }

    else {
        let user = new User(request.body.login, request.body.pass, request.body.fullName, request.body.email);
        user.saveToDb(response);
    }
    
});

app.get('/reg', function (request, response) {
    response.sendFile(__dirname + '/public/registration.html');
});

app.get('/script.js', function (request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.get('/style.css', function (request, response) {
    response.sendFile(__dirname + '/public/style.css');
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
