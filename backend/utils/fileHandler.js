const fs = require('fs').promises;
const path = require('path');

const CHAR_FILE = path.join(__dirname, "../data/characters.json");

async function readChars() {
    try {
        const data = await fs.readFile(CHAR_FILE, 'utf-8');
        const parsed = JSON.parse(data);

        console.log("Data fra characters.json:", parsed);
        //a lil fun times
        console.log(parsed.map(c => c.name));

        return parsed;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {readChars};