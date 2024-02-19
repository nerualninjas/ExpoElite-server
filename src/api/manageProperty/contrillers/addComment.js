const PropertyCollection = require("../../../models/productSchema");

const addComment = async (req, res) => {
  const propertyId = req.query.id;
  const { commentBy, comment, commentDate, commentTime } = req.body;

  try {
    const property = await PropertyCollection.findById(propertyId);

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    // Update the commentLogs array without using push
    property.commentLogs = [
      ...(property.commentLogs || []),
      { commentBy, comment, commentDate, commentTime },
    ];

    // Save the updated property
    await PropertyCollection.findByIdAndUpdate(
      propertyId,
      { $set: { commentLogs: property.commentLogs } },
      { new: true }
    );

    const updatedProperty = await PropertyCollection.findById(propertyId);
    return res.json(updatedProperty);
  } catch (error) {
    console.error("Error adding comment", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = addComment;