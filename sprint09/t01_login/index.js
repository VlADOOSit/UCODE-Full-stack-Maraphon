const express = require('express');
const User = require('./models/user');
const session = require('express-session');

const app = express();
const jsonParser = express.json();
const mysql = require('./db.js');

const PORT = 3000; 

app.use(
    session({
        secret: 'session secret',
        saveUninitialized: true
    })
);

let ses;

app.post('/login', jsonParser, function(request, response) {
    console.log(request.body);
    ses = request.session;

    if (request.body.login == '' || request.body.pass == '') {
        response.json({ans: 'All input!'});
    }

    else {
        let user = new User(request.body.login, request.body.pass);
        user.findInDb(response, ses);
    }
    
});

app.post('/', jsonParser, function(request, response) {
    ses = request.session;
    if(ses.content != true) {
        response.json({ans: "YESlogin"});
    }
    else {
        response.json({ ans: "NOlogin", 
                        login: ses.login,
                        fullName: ses.fullName,
                        email: ses.email,});
    }
});

app.post('/check', jsonParser, function(request, response) {
    ses = request.session;
    if(ses.content == true) {
        response.json({ans: "NOlogin"});
    }
});

app.post('/logout', jsonParser, function(request, response) {
    ses = request.session;

    ses.content = false;
    response.json({ans: "logout"});
});

app.get('/login', function(request, response) {
    response.sendFile(__dirname + '/public/login.html');
});

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/profile.html');
});

app.get('/style.css', function (request, response) {
    response.sendFile(__dirname + '/public/style.css');
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
