const express = require("express");
const { getPackege, postPackege, storeRentData } = require("../../api/rental");

const router = express.Router();

router.get('/getPackege', getPackege);
router.post('/postPackege', postPackege);
router.post('/storeRentData', storeRentData);

module.exports = router;