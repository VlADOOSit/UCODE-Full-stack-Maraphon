const fs = require('fs');
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const configPath = './config.json';
const parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

const connection = mysql.createConnection({
    host : parsed.host,
    user : parsed.user,
    database : parsed.database,
    password : parsed.password
});

function db(response, user, ses) {
    const sql = 'SELECT * FROM users WHERE login=?';

    connection.query(sql, user.login, function (err, rows) {
        if (err) {
            return console.log(err.message);
        }

        if (rows[0] == undefined) {
            response.json({ans: 'User not found'});
            return;
        }

        if (bcrypt.compareSync(user.pass, rows[0].pass)) {
            ses.content = true;
            ses.login = rows[0].login;
            ses.fullName = rows[0].fullName;
            ses.email = rows[0].email;
            
            response.json({ans: 'OK'});
            return;
        }
        else {
            response.json({ans: 'Incorrect password'});
            return;
        }
    })
}

module.exports.db = db;
