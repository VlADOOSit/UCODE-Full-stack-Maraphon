const mysql = require('../db.js');
const Model = require('../model.js')

class User extends Model {
    constructor(login, pass) {
        super();
        this.login = login;
        this.pass = pass;
    }

    findInDb(response, ses) {
        let user = {
            login: this.login,
            pass: this.pass,
        }
        mysql.db(response, user, ses);

    }
}

module.exports = User;