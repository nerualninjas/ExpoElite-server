const notificatiionCollection = require("../../../models/notification")

const createNotification= async(req,res)=>{
    const notification = req.body;
    
    const create = await userCollection.create(notification);
    res.send({ message: "notification successfully", insertedId: 1 });
}

module.exports = createNotification;