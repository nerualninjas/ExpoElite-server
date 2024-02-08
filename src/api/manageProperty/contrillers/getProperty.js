const PropertyCollection = require("../../../models/productSchema");

const getProperty=async(req, res)=>{
    const propertyId = req.params.id;
    console.log(propertyId)
    const property = await PropertyCollection.findOne({ _id: new Object(propertyId) });
    console.log(property);
    res.send(property);
};
module.exports = getProperty;
