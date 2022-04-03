const fs = require('fs');

class NotePad { 
    hasFiles() {
        return fs.existsSync('./tmp');
    }

    getHTMLList() {
        let arr = fs.readdirSync('./tmp');
        
        let strHTML = '<ul>';
        for (let i = 0; i < arr.length; i++) {
            const data = fs.readFileSync(`./tmp/${arr[i]}`);
            let dobj = JSON.parse(data);
            strHTML += `<li><a onclick="renderFile(event)" href="/select-file?file=${dobj.name}">${dobj.date}>${dobj.name}</a> <a href name="${dobj.name}" onclick="deleteFile(event)">DELETE</a></li>`;
        }
        strHTML += '</ul>';
        return strHTML;
    }

    getJsonList(name) { 
        
        const data = fs.readFileSync(`./tmp/${name}.json`);
        let dobj = JSON.parse(data);

        let keys = Object.keys(dobj);
        let val = Object.values(dobj);

        let strHTML = '<ul>';
        for (let i = 0; i < keys.length; i++) {

            strHTML += `<li>${keys[i]}: <span style="font-weight: bold">${val[i]}</span></li>`;
        }
        strHTML += '</ul>';
        return strHTML;
    }

    delete(name) {
        if (fs.existsSync(`tmp/${name}.json`)) {
            fs.unlinkSync(`tmp/${name}.json`);
        }
    }
}

module.exports = NotePad
