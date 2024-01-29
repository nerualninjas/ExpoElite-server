const PropertyCollection = require("../../../models/productSchema");

const getAllProperty = async (req, res) => {
  const property = await PropertyCollection.find();
  res.send(property);
};
module.exports = getAllProperty;
