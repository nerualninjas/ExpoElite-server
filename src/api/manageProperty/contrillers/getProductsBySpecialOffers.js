const PropertyCollection = require("../../../models/productSchema");

const getProductsBySpecialOffers = async (req, res) => {
    try {
        // Find documents where the specialOffers field is not null
        const productsWithSpecialOffers = await PropertyCollection.find({
            specialOffers: { $ne: null }
        });

        res.status(200).json({ products: productsWithSpecialOffers });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = getProductsBySpecialOffers;