const notificationCollection = require("../../../models/notification")

const getUserNotification= async(req,res)=>{
      
    const email = req.params.email;

    try{
        const result = await notificationCollection.findOne({userEmail:email});

        if(result){
            result.notificationData.sort((a,b)=>new Date(b.createdTime)-new Date(a.createdTime))
            res.send(result);
        }else{
            res.status(404).send({message: "Notification not found"});
        }
    }catch(error){
        console.error(error);
        res.status(500).send({message: "Internal server error"})
    }

}

module.exports = getUserNotification;