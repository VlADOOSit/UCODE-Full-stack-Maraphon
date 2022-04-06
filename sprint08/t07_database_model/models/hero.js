const Model = require('./../model.js')

class Hero extends Model {
    constructor(name, description, class_role, race = 'human') {
        super(name, description, class_role, race);
    }
    find(id) {
        super.find(id);
    }
    save() {
        super.save();
    }
    delete(id) {
        //console.log(this.id);
        super.delete(id);
        
    }
   
}

module.exports = Hero;