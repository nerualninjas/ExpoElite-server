const PropertyCollection = require("../../../models/productSchema");

const searchbyLoc = async (req, res) => {
  try {
    // Get the location parameter from the query string
    const location = req.query.location;
    console.log(location); // Logging the location for debugging

    // Construct the MongoDB query for case-insensitive regex search
    const query = {
      location: { $regex: new RegExp(location, "i") },
    };

    // Retrieve and sort the matching properties
    const properties = await PropertyCollection.find(query).sort({
      location: 1,
      price: 1,
    });

    // Return the results as JSON
    res.json(properties);
  } catch (error) {
    // Handle errors
    console.error("Error in searchbyLoc:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = searchbyLoc;
