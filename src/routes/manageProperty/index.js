const express = require("express");
const {
  addProperty,
  getProperty,
  getAllProperty,
  updateProperty,
  deleteProperty,
  searchAndSort,
  addOrRemoveLike,
  searchbyLoc,
  updatePropertyStatusPublish,
  updatePropertyStatusUnpublish,
  getUserLikeCount,
} = require("../../api/manageProperty/contrillers");
const router = express.Router();

router.post("/addProperty", addProperty);
router.get("/getProperty/:id", getProperty);
router.get("/getAllProperty", getAllProperty);
router.get("/searchAndSort", searchAndSort);
router.get("/searchbyLoc", searchbyLoc);
router.get("/getUserLikeCount/:email",getUserLikeCount)
router.put("/addOrRemoveLike", addOrRemoveLike);
router.patch("/updateProperty/:id", updateProperty);
router.patch("/updatePropertyStatusPublish/:id", updatePropertyStatusPublish);
router.patch("/updatePropertyStatusUnpublish/:id",  updatePropertyStatusUnpublish);
router.delete("/deleteProperty/:id", deleteProperty);


module.exports = router;
