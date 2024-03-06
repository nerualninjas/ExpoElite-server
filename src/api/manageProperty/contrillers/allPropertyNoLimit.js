const PropertyCollection = require("../../../models/productSchema");

const allPropertyNoLimit = async (req, res) => {
    const data = await PropertyCollection.find();
    res.send(data);
};

module.exports = allPropertyNoLimit;