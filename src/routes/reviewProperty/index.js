const express = require("express");
const { addReview, getReview, getAllReviews} = require("../../api/reviewProperty/controllers");

const router = express.Router();


router.post("/addReview", addReview);
router.get("/getReview/:email", getReview);
router.get("/getAllReviews", getAllReviews);

module.exports = router;
