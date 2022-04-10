const fs = require('fs');
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const configPath = './config.json';
const parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

const connection = mysql.createConnection({
    host : parsed.host,
    user : parsed.user,
    database : parsed.database,
    password : parsed.password
});

function db(response, user) {
    const sql = 'INSERT INTO users SET ?'

    user.pass = bcrypt.hashSync(user.pass, bcrypt.genSaltSync(saltRounds));

    connection.query(sql, user, function (err, rows) {
        if (err) {
            let str = err.message.split(' ')[err.message.split(' ').length - 1];
            if (str == "'users.email'") {
                response.json({ans: 'email error'});
            }
            if (str == "'users.login'") {
                response.json({ans: 'users error'});
            }
            return
        }
        response.json({ans: 'OK'});
    })
}

module.exports.db = db;