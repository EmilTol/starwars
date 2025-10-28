const crypto = require('crypto');
const fileHandler = require('../utils/fileHandler');

async function getChars () {
    return await fileHandler.readChars();
}

async function createChar (charData) {

    let maxId;
    const chars = await fileHandler.readChars();
    if (chars.length > 0) {
        maxId = Math.max(...chars.map(c => parseInt(c.id)));
    } else {
        maxId = 0;
    }

    const newChar = {
        id: String(maxId + 1),
        name: charData.name.trim(),
        alliance: charData.alliance.trim()
    };

    chars.push(newChar);
    await fileHandler.writeChars(chars);
    return newChar;
}

async function getCharById (id) {
    const char = await fileHandler.readChars()
    return char.find(char => char.id === id);
}



module.exports = {getChars, createChar, getCharById};