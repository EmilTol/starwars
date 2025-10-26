const charService = require("../services/charService");

async function getAll(req, res) {
    const characters = await charService.getChars();
    res.json(characters);
}

module.exports = {getAll};