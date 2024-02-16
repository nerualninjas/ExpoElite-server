const express = require('express');
const { getSoldProperty, deleteSoldProperty } = require("../../api/soldProperty/controllers");
const router = express.Router();

router.get("/getSoldProperty/:id", getSoldProperty);
router.delete("/deleteSoldProperty/:id", deleteSoldProperty);

module.exports = router;

