const PropertyCollection = require("../../../models/productSchema");

const getComments = async (req, res) => {

    const propertyId = req.params.id;
  
    try {
      // Find the property by ID
      const property = await PropertyCollection.findById(propertyId);
  
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
  
      const comments = property.commentLogs || [];
  
      return res.json({ comments });
    } catch (error) {
      console.error('Error fetching comments', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  module.exports = getComments;