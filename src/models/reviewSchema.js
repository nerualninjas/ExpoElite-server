const mongoose = require ("mongoose")

const reviewSchema = new mongoose.Schema({
    userEmail:{
        type:String,
        require:true,
    },
    userPhoto:{
        type:String,
        require:true,
    },
    userName:{
        type:String,
        require:true,
    },
    review:{
        type:String,
        require:true,
    },

})
const reviewCollection = mongoose.model("reviews", reviewSchema);

module.exports = reviewCollection;
    