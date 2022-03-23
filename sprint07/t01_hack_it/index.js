const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();

const jsonParser = express.json();

app.use(
    session({
        secret: 'session secret',
        saveUninitialized: true
    })
)

const PORT = 3000; 
let ses;

app.post('/', jsonParser, function (request, response) {
    ses = request.session;

    console.log(request.body);

    ses.pass = request.body.pass;
    ses.salt = request.body.salt;

    let salt = bcrypt.genSaltSync(Number(ses.salt));
    let password = bcrypt.hashSync(ses.pass, salt);

    ses.hash = password;
    response.json({ hash: ses.hash,});

});

app.post('/check', jsonParser, function (request, response) {
    ses = request.session;

    ses.newPass = request.body.newPass;
    
    if (bcrypt.compareSync(ses.newPass, ses.hash)) {
        response.json({ color: 'green',
                        flag: 'Hacked!'});
    }
    else {
        response.json({ color: 'red',
                        flag: 'not Hacked!!'});
    }

});

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/script.js', function (request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
