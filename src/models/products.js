const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    sellerEmail:{
        type: String,
        require:true,
    },
    ProductName:{
        type: String,
        require:true,
    },
    ProductPrice:{
        type: String,
        require:true,
    },
    ProductQuantity:{
        type: String,
        require:true,
    },
    bathrooms:{
        type: String,
        require:true,
    },
    bedrooms:{
        type: String,
        require:true,
    },
    image:{
        type: String,
        require:true,
    },
    livingRoom:{
        type: String,
        require:true,
    },
    type:{
        type: String,
        require:true,
    },
    status:{
        type: String,
       enum:["Pending","Unpublish","Publish"],
    }
})

const productsCollection = mongoose.model("products",productSchema)

module.exports = productsCollection;