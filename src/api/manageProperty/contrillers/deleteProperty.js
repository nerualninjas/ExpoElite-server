const PropertyCollection = require("../../../models/productSchema");

const deleteProperty = async (req, res) => {
  const propertyId = req.params.id;
  console.log(propertyId);
  const remove = await PropertyCollection.deleteOne({
    // _id: new Object(propertyId),
    _id: propertyId,
  });
  res.send(remove);
};
module.exports = deleteProperty;
