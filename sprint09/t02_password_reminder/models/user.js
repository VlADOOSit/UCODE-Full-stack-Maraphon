const mysql = require('../db.js');
const Model = require('../model.js')

class User extends Model {
    constructor(email) {
        super();
        this.email = email;
    }

    findAndSend(response) {
        let user = {
            email: this.email,
        }
        mysql.db(response, user);

    }
}

module.exports = User;