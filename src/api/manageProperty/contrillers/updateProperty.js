const PropertyCollection = require("../../../models/productSchema");

const updateProperty = async (req, res) => {
  const propertyId = req.params.id;
  console.log(propertyId);
  const {
    propertyName,
    image,
    quantity,
    price,
    bedrooms,
    bathrooms,
    livingRoom,
    propertyType,
    propertyDetails,
    location,
  } = req.body;
  const update = await PropertyCollection.updateOne(
    { _id: propertyId },
    {
      $set: {
        propertyName: propertyName,
        image: image,
        quantity: quantity,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        livingRoom: livingRoom,
        propertyType: propertyType,
        propertyDetails: propertyDetails,
        location: location,
      },
    }
  );
  res.send(update);
};
module.exports = updateProperty;
