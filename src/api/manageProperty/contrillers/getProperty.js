const PropertyCollection = require("../../../models/productSchema");

const getProperty = async (req, res) => {
  const propertyId = req.params.id;
  const property = await PropertyCollection.findOne({
    _id: propertyId,
  });
  res.send(property);
};
module.exports = getProperty;
