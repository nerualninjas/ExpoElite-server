const mongoose = require ("mongoose")


const appointmentSchema = new mongoose.Schema({

    buyerEmail:{
        type:String,
        require:true,
    },
    buyerName:{
        type:String,
        require:true,
    },
    buyerPhoto:{
        type:String,
        require:true,
    },
    sellerEmail:{
        type:String,
        require:true,
    },
    sellerName:{
        type:String,
        require:true,
    },
    sellerPhoto:{
        type:String,
        require:true,
    },
    propertyId: {
        type: String,
        required: true,
      },
    propertyName: {
            type: String,
            required: true,
          },
    appointmentDate: {
        type: Date, 
        required: true,
    },
    startTime: {
        type: String, 
        required: true,
    },
    endTime: {
        type: String, 
        required: true,
    },
    appointmentStatus:{
        type:String,
        enum: ['pending',"reject","approved"],

    },

 
})

const appointmentCollection = mongoose.model("users", appointmentSchema);

module.exports = appointmentCollection;