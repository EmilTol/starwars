const crypto = require('crypto');
const fileHandler = require('../utils/fileHandler');

async function getChars () {
    return await fileHandler.readChars();
}

module.exports = {getChars}