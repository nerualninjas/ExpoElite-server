const reviewCollection = require("../../../models/reviewSchema");

const getReview = async (req, res) => {
    try {
        const userEmail = req.params.email;
        const reviews = await reviewCollection.find({ userEmail });
        res.status(200).json(reviews);
    } catch (error) {
       
        res.status(500).json({ message: error.message });
    }
};

module.exports = getReview;
