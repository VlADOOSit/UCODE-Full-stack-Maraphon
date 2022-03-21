const express = require('express');
const session = require('express-session');

const app = express();

const jsonParser = express.json();

app.use(
    session({
        secret: 'session secret',
        saveUninitialized: true
    })
)

const PORT = 3000; 

let flag = 1;
let ses;

app.post('/', jsonParser, function (request, response) {
    flag = 0;
    ses = request.session;
    console.log(request.body);

    ses.realName = request.body.realName;
    ses.SuperheroName = request.body.SuperheroName;
    ses.age = request.body.age;
    ses.about = request.body.about;
    ses.photo = request.body.photo;
    ses.exp = request.body.exp;
    ses.levelControl = request.body.levelControl;
    ses.radiogroup = request.body.radiogroup;

    response.json({ realName: ses.realName,
                    SuperheroName: ses.SuperheroName,
                    age: ses.age, 
                    about: ses.about,
                    photo: ses.photo,
                    exp: ses.exp, 
                    levelControl: ses.levelControl,
                    radiogroup: ses.radiogroup,});

});

app.post('/forget', jsonParser, function(request, response) {
    flag = 1;
    return response.redirect('/');
});


app.get('/forget' ,jsonParser, function(request, response) {
    ses = request.session;
    response.json({ realName: ses.realName,
                    SuperheroName: ses.SuperheroName, 
                    age: ses.age,
                    about: ses.about,
                    photo: ses.photo, 
                    exp: ses.exp,
                    levelControl: ses.levelControl,
                    radiogroup: ses.radiogroup,});
});

app.get('/', function (request, response) {
    if (flag == 0) {
        return response.sendFile(__dirname + '/forget.html');
    }
    response.sendFile(__dirname + '/index.html');
});

app.get('/forget.html', function (request, response) {
    response.sendFile(__dirname + '/forget.html');
});

app.get('/script.js', function (request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
