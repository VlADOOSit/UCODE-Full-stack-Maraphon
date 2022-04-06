const fs = require('fs');
const mysql = require("mysql2");

const configPath = './config.json';
const parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

const connection = mysql.createConnection({
    host : parsed.host,
    user : parsed.user,
    database : parsed.database,
    password : parsed.password
});

connection.connect(function(err){
    if (err) {
        return console.error("Error: " + err.message);
    }
    else{
        console.log("Connected");
    }
});

connection.end(function(err) {
    if (err) {
        return console.log("Error: " + err.message);
    }
    console.log("Connection closed");
});
