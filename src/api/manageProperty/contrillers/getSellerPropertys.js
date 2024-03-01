const PropertyCollection = require("../../../models/productSchema");

const getSellerPropertys=async(req, res)=>{
   
    
    const property = await PropertyCollection.find({propertyCreator: req.params.email});
    console.log(property);
    res.send(property);
};
module.exports = getSellerPropertys;