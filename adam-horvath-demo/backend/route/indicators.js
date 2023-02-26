const express = require("express");
const router = express.Router();
const getIndicators = require("../controller/indicatorController");

router.get("/indicators", getIndicators);

module.exports = router;