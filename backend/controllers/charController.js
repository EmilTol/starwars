const charService = require("../services/charService");

async function getAll(req, res) {
    try {
        const characters = await charService.getChars();
        res.status(200).json(characters);
    } catch (error) {
        console.log(error);
    }
}

async function create (req, res) {
    try {
        const newChar = await charService.createChar(req.body);
        res.status(201).json(newChar);
    } catch (error) {
        console.log("error errorrrrrrrrr");
        res.status(400).send({error: error.message});
    }
}

function downloadFile (req, res, next) {
    try {
        res.download('../frontend/hello.txt')
    }catch (error) {
        next(error);
    }
}

async function getById (req, res) {
    try {
        const char = await charService.getCharById(req.params.id);
        res.status(200).json(char);
    } catch (error) {
        console.log("error errorrrrrr21312313213r");
    }
}

module.exports = {getAll, create, downloadFile, getById};