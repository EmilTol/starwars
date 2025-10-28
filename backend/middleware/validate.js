

function validateChar (req, res, next)  {
    const charData = req.body;

    if (!charData.name || charData.name.trim().length < 2)  {
        return res.status(400).json({ error: 'Invalid character name.' });
    }

    if (!charData.alliance) {
        return res.status(400).json({ error: 'Invalid char.alliance' });
    }

    const validRoles = ["Jedi", "Sith", "Resistance"];
    if (!validRoles.includes(charData.alliance.trim())) {
        return res.status(400).json({ error: "Must be Jedi, Sith or Resistance" });
    }

    next();

}

module.exports = {validateChar};