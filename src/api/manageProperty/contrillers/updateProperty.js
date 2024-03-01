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
    offerPrice,
    offerStartDate,
    offerEndDate,
    offerDetails,
  } = req.body;
  console.log(req.body);
  const update = await PropertyCollection.updateOne(
    { _id: propertyId },
    {
      $set: {
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
        offerPrice,
        offerStartDate,
        offerEndDate,
        offerDetails,
      },
    },
    { upsert: true }
  );

  res.send(update);
};

module.exports = updateProperty;
