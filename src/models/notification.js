const mongoose = require("mongoose")


const notificationSubSchema = new mongoose.Schema({

    notificationText: {
        type: String,
        require: true,
    },
    notificationPath: {
        type: String,

    },
    createdTime: {
        type: String,
    },

    notificationStatus: {
        type: String,
        enum: ["unread", "read"],
    },


})




const notificationSchema = new mongoose.Schema({

    userEmail: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
    }
    ,
    notificationData: [notificationSubSchema]



})

const notificatiionCollection = mongoose.model("notifications", notificationSchema);

module.exports = notificatiionCollection;