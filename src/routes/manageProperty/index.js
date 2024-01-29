const express = require("express");
const {
  addProperty,
  getProperty,
  getAllProperty,
  updateProperty,
  deleteProperty,
} = require("../../api/manageProperty/contrillers");
const router = express.Router();

router.post("/addProperty", addProperty);
router.get("/getProperty/:id", getProperty);
router.get("/getAllProperty", getAllProperty);
router.patch("/updateProperty/:id", updateProperty);
router.delete("/deleteProperty/:id", deleteProperty);

module.exports = router;
