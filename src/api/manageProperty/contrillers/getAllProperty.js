const PropertyCollection = require("../../../models/productSchema");

const getAllProperty = async (req, res) => {
  const { page, limit } = req.query;
  console.log(page, limit);
  const property = await PropertyCollection.find().skip((page - 1) * limit).limit(limit)
  res.send(property);
};
module.exports = getAllProperty;
