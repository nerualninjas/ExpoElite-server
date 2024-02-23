const express = require('express');
const getAllProperty = require('../../api/pagination/controllers/getAllProperty');
// const getAllProperty = require('../../api/pagination/controllers');


const router = express.Router();


router.get('/getAllProperty', getAllProperty);

module.exports = router;

