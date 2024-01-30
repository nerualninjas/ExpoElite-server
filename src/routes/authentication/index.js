const express = require("express");
const { createUser } = require("../../api/authentication/controllers");
const { getUser } = require("../../api/authentication/controllers");
const router = express.Router();

router.post("/createUser", createUser);
router.get("/getUsers", getUser);

module.exports = router;
