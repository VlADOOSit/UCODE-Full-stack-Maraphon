const fs = require('fs');

class FileList {
    getList() {
        return fs.readdirSync('./tmp');
    }
    
    hasFiles() {
        return fs.existsSync('./tmp');
    }

    getHTMLList() {
        let arr = fs.readdirSync('./tmp');
        let strHTML = '<ul>';
        for (let i = 0; i < arr.length; i++) {
            strHTML += `<li><a onclick="renderFile(event)" href="/select-file?file=${arr[i]}">${arr[i]}</a></li>`;
        }
        strHTML += '</ul>';
        return strHTML;
    }
}

module.exports = FileList;