const PropertyCollection = require("../../../models/productSchema");

const addProperty=async(req, res)=>{
    const property = req.body;
    const create = await PropertyCollection.create(property);
    res.send(create);
};
module.exports=addProperty;