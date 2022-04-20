const mysql = require('./db.js');
 
class Model {
    constructor(name, description, class_role, race) {
        this.id = 0;
        this.heroName = name;
        this.heroDescription = description;
        this.class_role = class_role;
        this.race = race;
    }

    find(id) {
        let sql = 'SELECT * FROM heroes WHERE id=?';

        mysql.connect();

        mysql.query(sql, id, function(err, rows) {
            if (err) {
                console.log("Hero wasn't found!");
                throw err;
            }

            this.id = rows[0].id;
            this.heroName = rows[0].name;
            this.heroDescription = rows[0].description;
            this.class_role = rows[0].class_role;
            this.race = rows[0].race;

            console.log(rows[0]);
        });
    }

    save() {
        let sql = 'INSERT INTO heroes SET ?';

        mysql.connect();

        let hero = {
            name: this.heroName,
            description: this.heroDescription,
            class_role: this.class_role,
            race: this.race
        };

        mysql.query(sql, hero, function(err, rows) {
            if (err) {
                console.log("Hero wasn't save");
                throw err;
            }
            this.id = rows.insertId;
        });
    }

    delete(id) {
        let sql = 'DELETE FROM heroes WHERE id = ?';

        mysql.connect();
            
        mysql.query(sql, id, function (err, rows) {
            if (err) {
                console.log("Hero wasn't delete");
                throw err;
            }
        });
    }
}


module.exports = Model;
