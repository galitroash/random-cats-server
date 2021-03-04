const jsonFile = require('jsonfile');

exports.getAll = async() => {
    const fileData = await jsonFile.readFile('./db.json');
    return fileData;
}

