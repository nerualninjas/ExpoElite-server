const PropertyCollection = require("../../../models/productSchema");

const getAllProperty = async (req, res) => {
  const { page, limit } = req.query;

  // Parse the limit value to an integer
  const parsedLimit = parseInt(limit, 10);

  console.log(page, parsedLimit);

  try {
    const property = await PropertyCollection.find({publishStatus: "publish"})
      .skip((page - 1) * parsedLimit)
      .limit(parsedLimit);

    res.send(property);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getAllProperty;