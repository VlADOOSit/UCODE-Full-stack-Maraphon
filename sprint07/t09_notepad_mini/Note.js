const fs = require('fs');

class Note {
    constructor(name, importance) {
        this.name = name;
        this.importance = importance;
    }

    write(content) {
        let dir = './tmp';
        
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        const path = `./tmp/${this.name}.json`;
        var today = new Date();

        const config = {date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' '+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(), 
                        name: this.name,
                        importance: this.importance,
                        text: content };

        try {
            fs.writeFileSync(path, JSON.stringify(config, null, 2), 'utf8');
        }          
        catch (error) {
            console.log('An error has occurred ', error);
        }
    }

}

module.exports = Note;
