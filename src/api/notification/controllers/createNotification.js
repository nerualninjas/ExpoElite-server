const notificationCollection = require("../../../models/notification")

const createNotification= async(req,res)=>{
    const notification = req.body;
    console.log(notification);
    
    const create = await notificationCollection.create(notification);
    res.send({ message: "notification successfully", insertedId: 1 });
}

module.exports = createNotification;