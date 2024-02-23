const express = require("express");
const { addReview, getReview } = require("../../api/reviewProperty/controllers");
const router = express.Router();


router.post("/addReview", addReview);
router.get("/getReview/:email", getReview);

module.exports = router;
