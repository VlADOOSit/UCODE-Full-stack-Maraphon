const fs = require('fs'); 
const csv = require('csv-parser');

async function parseCSV(path) {

    return new Promise((resolve, reject) => {
        const words=[];

        fs.createReadStream(path)
        .pipe(csv({delimiter: ','}))
        .on('data', function(csvrow) {

            words.push(csvrow);        
        })
        .on('end',function() {
            resolve(words)
        })
        .on('error', function(err) {
            reject(err);
        });

    });

}

module.exports.parseCSV = parseCSV;