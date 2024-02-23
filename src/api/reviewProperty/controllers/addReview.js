const reviewCollection = require("../../../models/reviewSchema");

const addReview = async (req, res) => {
        const data = req.body;
        console.log(data);
        const savedReview = await reviewCollection.create(data);
        res.send(savedReview);
};

module.exports = addReview;
