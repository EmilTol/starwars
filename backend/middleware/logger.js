const {formatLocal} = require('../utils/dateFormat')

function requestLogger(req, res, next)  {
    const start = Date.now();
    res.on('finish', () => {
        const ms = Date.now() - start;
        console.log(`[${formatLocal()}][REQ] ${req.method} ${req.url} -> ${res.statusCode} (${ms}ms)`);
    });
    next();
}

module.exports = { requestLogger };