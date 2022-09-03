const express = require('express');
const router = express.Router();

router.get("/", (_req, res, _next) => {
    res.status(200).json('welcome to your APP Full-Contact');
});

module.exports = router;