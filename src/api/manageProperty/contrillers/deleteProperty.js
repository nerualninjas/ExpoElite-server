const PropertyCollection = require("../../../models/productSchema");

const deleteProperty=async(req, res)=>{
    const propertyId = req.query.propertyId;
    const remove = await PropertyCollection.deleteOne({ _id: new Object(propertyId) });
    res.send(remove);
};
module.exports=deleteProperty;