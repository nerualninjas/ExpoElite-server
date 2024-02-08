const notificationCollection = require("../../../models/notification")

const getNotification= async(req,res)=>{
      
    
    const result = await notificationCollection.find();
    res.send(result);
}

module.exports = getNotification;