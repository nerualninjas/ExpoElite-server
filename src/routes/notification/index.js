const express = require("express")
const {createNotification,deleteNotification,readNotification,getNotification,getUserNotification,getUnreadNotificationCount} =require("../../api/notification/controllers")

const router = express.Router();

router.post('/createNotification', createNotification);
router.get('/getNotification',getNotification);
router.get('/getUserNotification/:email',getUserNotification);
router.get('/getUnreadNotificationCount',getUnreadNotificationCount);
router.patch('/readNotification',readNotification);
router.delete('/deleteNotification',deleteNotification);


module.exports = router;