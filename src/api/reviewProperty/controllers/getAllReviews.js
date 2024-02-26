const reviewCollection = require("../../../models/reviewSchema");

const getAllReviews = async (req, res) => {
    const reviews = await reviewCollection.find(); // Retrieve all reviews
    res.send(reviews);
};

module.exports =  getAllReviews;