const fs = require('fs');
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const shortid = require('shortid');
const configPath = './config.json';
const parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

const connection = mysql.createConnection({
    host : parsed.host,
    user : parsed.user,
    database : parsed.database,
    password : parsed.password
});

function db(response, user) {
    const sql = 'SELECT * FROM users WHERE email=?';

    connection.query(sql, user.email, function (err, rows) {
        if (err) {
            return console.log(err.message);
        }

        if (rows[0] === undefined) {
            response.json({ans: 'User not found'});
            return;
        }

        else {

            const newPassword = shortid.generate();
            let new_has = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10));

            connection.query(`INSERT INTO users (login, pass, fullName, email)
            VALUES("${rows[0].login}", "${new_has}", "${rows[0].fulName}", "${rows[0].email}")
            ON DUPLICATE KEY UPDATE pass="${new_has}", email="${rows[0].email}"`, function (err, rows) {
                if (err) {
                    return console.log(err.message);
                }
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'vlad.kharkovskiy22@gmail.com',
                    pass: 'wsxqazwsxqaz',
                }
            })
        
            transporter.sendMail({
                from: 'vlad.kharkovskiy22@gmail.com',
                to: user.email,
                subject: 'password',
                html: `
                        <p>Dear user,</p>
                        <p>Your password is: ${newPassword}</p>
                        <p>Best regards!</p>`
            });

            response.json({ans: "OK"});
        }
    })
}

module.exports.db = db;
