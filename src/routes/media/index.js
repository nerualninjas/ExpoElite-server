const express = require("express");
const { uploadImage } = require("../../api/uploadMedia/controller");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post("/uploadImage", upload.single('imagePath'), uploadImage);

module.exports = router;