const express = require('express');

const app = express();

const POST = 3000; 

app.set('view engine', 'ejs');
app.set('views', './views');

const normal = require('./normal-router')
const quantum = require('./quantum-router')

const normalTime = normal.calculateTime()
const quantumTime = quantum.calculateTime()

app.get('/', (request, response) => {
    response.render('index', { title: 'Main page' });
})

app.get('/normal', (request, response) => {
    response.render('normal', {
            year: normalTime.years(),
            month: normalTime.months(),
            day: normalTime.days()
        });
});

app.get('/quantum', (request, response) => {
    response.render('quantum', {
        year : quantumTime[0],
        month : quantumTime[1],
        day: quantumTime[2]
    });
});


app.listen(POST, () => {
    console.log(`Server start on http://localhost:${POST}`);
});
