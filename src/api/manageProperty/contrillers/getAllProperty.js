const PropertyCollection = require("../../../models/productSchema");

const getAllProperty=async(req, res)=>{
    const propertys = await PropertyCollection.find();
    res.send(propertys);
};
module.exports=getAllProperty;