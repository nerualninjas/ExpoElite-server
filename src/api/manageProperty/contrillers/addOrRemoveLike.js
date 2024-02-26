const PropertyCollection = require("../../../models/productSchema");

const addOrRemoveLike = async (req, res) => {


  const propertyId = req.query.id;
  const newLikeByEmail = req.query.userEmail;
  // console.log(propertyId,newLikeByEmail);  

  try {
    const property = await PropertyCollection.findById(propertyId);
    if (!property) {
      return res.status(404).json({ error: "Property not found" })
    }


    let existingLikes = property.likeBy || [];
    const userIndex = existingLikes.indexOf(newLikeByEmail);
    // console.log(existingLikes);
    if (userIndex === -1) {
      existingLikes.push(newLikeByEmail);

    } else {
      existingLikes.splice(userIndex, 1);
    }
    await PropertyCollection.findByIdAndUpdate(propertyId, { $set: { likeBy: existingLikes } }, { new: true });
    const updatedProperty = await PropertyCollection.findById(propertyId);
    return res.json(updatedProperty)
  } catch (error) {
    console.error("Error updated property", error);
    res.status(500).json({ error: "Internal Server Error" })
  }



};
module.exports = addOrRemoveLike;