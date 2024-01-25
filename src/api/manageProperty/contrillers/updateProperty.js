const PropertyCollection = require("../../../models/productSchema");

const updateProperty=async(req, res)=>{
    const propertyId = req.query.propertyId;
    const { propertyName, image, quantity, price, bedRoom, bathRoom, livingRoom, propertyType, propertyDetails, location } = req.body;
    const update = await PropertyCollection.updateOne(
        { _id: new Object(propertyId) },
        { $set: { propertyName: propertyName, image: image, quantity: quantity, price: price, bedRoom: bedRoom, bathRoom: bathRoom, livingRoom: livingRoom, propertyType: propertyType, propertyDetails: propertyDetails, location: location} },
    );
    res.send(update);
};
module.exports=updateProperty;