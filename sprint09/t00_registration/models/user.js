const mysql = require('../db.js');
const Model = require('../model.js')

class User extends Model {
    constructor(login, pass, fullName, email) {
        super();
        this.login = login;
        this.pass = pass;
        this.fullName = fullName;
        this.email = email;
    }

    saveToDb(response) {
        let user = {
            login: this.login,
            pass: this.pass,
            fullName: this.fullName,
            email: this.email,
        }
        mysql.db(response, user);

    }
}

module.exports = User;