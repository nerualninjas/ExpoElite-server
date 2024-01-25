const PropertyCollection = require("../../../models/productSchema");

const getProperty=async(req, res)=>{
    const propertyId = req.query.propertyId;
    const property = await PropertyCollection.findOne({ _id: new Object(propertyId) });
    res.send(property);
};
module.exports=getProperty;