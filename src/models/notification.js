const mongoose = require("mongoose")


const notificationSubSchema = new mongoose.Schema({

    notificationText: {
        type: String,
        require: true,
    },
    notifyUserPhoto: {
        type: String,

    },
    notificationPath: {
        type: String,

    },
    createdTime: {
        type: Date,
        default:Date.now
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


// Convert the default value to local time
notificationSchema.pre('save', function(next) {
    this.createdTime = new Date(this.createdTime).toLocaleString();
    next();
});

const notificationCollection = mongoose.model("notifications", notificationSchema);

module.exports = notificationCollection;