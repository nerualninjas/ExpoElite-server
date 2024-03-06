const express = require("express");
const {
  addProperty,
  getProperty,
  getAllProperty,
  getTotalProperty,
  updateProperty,
  deleteProperty,
  searchAndSort,
  addOrRemoveLike,
  searchbyLoc,
  updatePropertyStatusPublish,
  updatePropertyStatusUnpublish,
  getUserLikeCount,
  addComment,
  getComments,
  getSellerPropertys,
  getUserCommentCount,
  getProductsBySpecialOffers
  } = require("../../api/manageProperty/contrillers");
const router = express.Router();

router.post("/addProperty", addProperty);
router.get("/getProperty/:id", getProperty);
router.get("/getSellerPropertys/:email", getSellerPropertys);
router.get("/getTotalProperty", getTotalProperty);
router.get("/getAllProperty", getAllProperty);
router.get("/searchAndSort", searchAndSort);
router.get("/searchbyLoc", searchbyLoc);
router.get("/getUserLikeCount/:email",getUserLikeCount);
router.get("/getUserCommentCount/:email",getUserCommentCount)
router.put("/addOrRemoveLike", addOrRemoveLike);
router.put("/addComment", addComment);
router.get("/getComments/:id", getComments);
router.patch("/updateProperty/:id", updateProperty);
router.patch("/updatePropertyStatusPublish/:id", updatePropertyStatusPublish);
router.patch("/updatePropertyStatusUnpublish/:id",  updatePropertyStatusUnpublish);
router.delete("/deleteProperty/:id", deleteProperty);
router.get("/getProductsBySpecialOffers", getProductsBySpecialOffers);


module.exports = router;
