const express = require("express");
const { createUser } = require("../../api/authentication/controllers");
const router = express.Router();

router.post("/createUser", createUser);

module.exports = router;
