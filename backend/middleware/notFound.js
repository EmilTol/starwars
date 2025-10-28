const path = require('path');

function lostnFound (req, res)  {
    res.status(404).sendFile(path.join(process.cwd(), '..','frontend','404.html'));
};

module.exports = {lostnFound};