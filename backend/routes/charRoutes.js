const express = require('express');
const router = express.Router();

const charController = require("../controllers/charController");


router.get('/api/chars', charController.getAll);

module.exports = router;