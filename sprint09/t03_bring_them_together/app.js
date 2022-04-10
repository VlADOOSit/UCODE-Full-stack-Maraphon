const express = require('express');
const mainRoutes = require('./Routes/main-routes.js');
const session = require('express-session');

const app = express();

const PORT = 3000; 

app.use(
    session({
        secret: 'session secret',
        saveUninitialized: true
    })
);

app.use(mainRoutes);

app.use(function (req, res, next) {
    res.status(404).send("404 Not Found")
});

app.listen(PORT, () => {
    console.log(`Server start on http://localhost:${PORT}`);
});
