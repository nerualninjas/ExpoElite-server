const notificationCollection = require("../../../models/notification")

const createNotification= async(req,res)=>{
    const newNotification = req.body;
   console.log(newNotification);
    try{

        const isUserNotification = await notificationCollection.findOne({userEmail:newNotification.userEmail} )
        if(!isUserNotification){
 // create notification and save to the database 
     const createdNotification = await notificationCollection.create(newNotification);
     return res.status(201).send({message: "Notification created  successfully"})
        }
       
        const userEmail = newNotification.userEmail;

        //push subsequent notification to notificationData
        await notificationCollection.findOneAndUpdate(
            { userEmail:userEmail},
            { $push:{notificationData: newNotification.notificationData}},
            { new:true},
            
            );
            res.status(201).send({message: "Notification  push successfully"})
    } catch(error){
        console.error("Error create or pushing notification",error);
        res.status(500).send({message:"Internal server error"})
    }
    
}

module.exports = createNotification;