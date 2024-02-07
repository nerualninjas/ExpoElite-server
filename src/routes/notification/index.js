const express = require("express")
const {createNotification,getNotification} =require("../../api/notification/controllers")

const router = express.Router();

router.post('/createNotification', createNotification);
router.get('/getNotification',getNotification);


module.exports = router;