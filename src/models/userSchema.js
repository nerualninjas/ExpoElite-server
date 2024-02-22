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
 
    membership:{
        type:String,
        enum: ['free',"premium-monthly","premium-yearly"],

    },
    amount:{
        type:Number,
       
    },
    sellerRegStartDate:{
        type:String,
       
    },
    sellerExpireDate:{
        type:String,
       
    },
    sellerRegStatus:{
        type:String,
        enum: ['pending',"Active","Renew","deactivated"],

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
          "pending",
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