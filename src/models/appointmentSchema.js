const mongoose = require ("mongoose")

const appointmentSchema = new mongoose.Schema({

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
        type: String, 
        required: true,
    },
    appointmentStartTime: {
        type: String, 
        required: true,
    },
    appointmentEndTime: {
        type: String, 
        required: true,
    },
    appointmentStatus:{
        type:String,
        enum: ['pending',"rejected","approved"],
        default: 'pending',

    },

 
})

const appointmentCollection = mongoose.model("appointments", appointmentSchema);

module.exports = appointmentCollection;


// const { Schema, model } = require('mongoose');


// const AppointmentCollection = model('appointments', new Schema({}, { strict: false }));

// module.exports=AppointmentCollection;