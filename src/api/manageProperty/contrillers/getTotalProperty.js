const PropertyCollection = require("../../../models/productSchema");

const getTotalProperty = async (req, res) => {
  

  try {
    const property = await PropertyCollection.find()
      

    res.send(property);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getTotalProperty;