const reviewCollection = require("../../../models/reviewSchema");

const addReview = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        
        const savedReview = await reviewCollection.create(data);
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = addReview;
