const notificationCollection = require("../../../models/notification")
const readNotification= async(req,res)=>{
 
   try{
    const userRead = req.query;
    const userEmail =userRead.email;
    const notificationId =userRead.id;
    
    // console.log(userEmail,notificationId);
    const result= await notificationCollection.findOneAndUpdate(
        {
            userEmail: userEmail,
        "notificationData._id": notificationId},
        {$set:{"notificationData.$.notificationStatus":"read"}},
        {new: true}
        );

        if(!result){
            return res.status(200).json({message: " Notification not found"});
            
        }
        res.status(200).json({ message: "Notification marked as read" });
    } catch (error) {
        console.error("Error marking notification as read", error);
        res.status(500).json({ message: "Internal Server Error" });
   }


}

module.exports = readNotification;