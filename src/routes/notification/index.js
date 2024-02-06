const express = require("express")
const {createNotification} =require("../../api/notification/controllers")

const router = express.Router();

router.post('/createNotification', createNotification);



module.exports = router;