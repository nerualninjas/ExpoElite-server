const express = require("express");
const { getPackege, postPackege } = require("../../api/rental");

const router = express.Router();

router.get('/getPackege', getPackege);
router.post('/postPackege', postPackege);


module.exports = router;