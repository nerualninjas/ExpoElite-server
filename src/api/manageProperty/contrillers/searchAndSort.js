const PropertyCollection = require("../../../models/productSchema");

const searchAndSort = async (req, res) => {
  try {
    let query = {};

    if (req.query.location) {
      query.location = { $regex: new RegExp(req.query.location, 'i') };
    }

    if (req.query.minPrice || req.query.maxPrice) {
      query.price = {};
      if (req.query.minPrice) {
        query.price.$gte = parseInt(req.query.minPrice);
      }
      if (req.query.maxPrice) {
        query.price.$lte = parseInt(req.query.maxPrice);
      }
    }

    if (req.query.propertyType) {
      query.propertyType = req.query.propertyType;
    }

    const properties = await PropertyCollection.find(query).sort({ location: 1, price: 1 });
    res.json(properties);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports=searchAndSort;
