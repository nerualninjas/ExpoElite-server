const createNotification = require('./createNotification');
const getNotification = require('./getNotification');
const getUserNotification = require('./getUserNotification');
const getUnreadNotificationCount = require('./getUnreadNotification');
const readNotification = require('./readNotification');
const deleteNotification = require('./deleteNotification');


module.exports ={createNotification,readNotification
    ,deleteNotification
    ,getNotification,getUserNotification,getUnreadNotificationCount};