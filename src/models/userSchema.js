const mongoose = require ("mongoose")


const userSchema = new mongoose.Schema({

    userEmail:{
        type:String,
        require:true,
    },
    userName:{
        type:String,
        require:true,
    },
    userPhoto:{
        type:String,
        require:true,
    },
 
    userMemberShip:{
        type:String,
        enum: ['free',"Premium","ultra"],

    },
    memberShipStatus:{
        type:String,
        enum: ['free',"Active","Renew","deactivated"],

    },
    userRole:{
        type:String,
        enum: ['user',"Admin","Seller"],
        require:true,
    },
    roleStatus: {
        type: String,
        enum: [
          "no request",
          "pending request for Seller",
          "Approved",
        ],
      },
      userStatus: {
        type: String,
        enum: ["Active", "Blocked"],
      },

  


})

const userCollection = mongoose.model("users", userSchema);

module.exports = userCollection;