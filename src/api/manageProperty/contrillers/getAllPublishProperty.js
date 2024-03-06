const PropertyCollection = require("../../../models/productSchema");


const getAllPublishProperty = async (req, res) => {

    try {
        const property = await PropertyCollection.find({ publishStatus: "publish" })
        res.send(property);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
module.exports = getAllPublishProperty;