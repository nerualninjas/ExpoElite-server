const reviewCollection = require("../../../models/reviewSchema");

const addReview = async (req, res) => {
    try {
        const { userEmail, userPhoto, userName, review } = req.body;
        
        const newReview = new reviewCollection({
            userEmail,
            userPhoto,
            userName,
            review
        });
        
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = addReview;
