const express = require('express');
const router = express.Router();

const charController = require("../controllers/charController");


router.get('/api/chars', charController.getAll);

router.post("/api/chars", validateChar, charController.create);

router.get("/download", charController.downloadFile);

router.get("/api/chars/:id", charController.getById);

router.get("/yoda", (req,res ) => {
    res.redirect("/api/chars/1");
});

module.exports = router;