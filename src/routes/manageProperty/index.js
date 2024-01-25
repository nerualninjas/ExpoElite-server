const express = require('express');
const { addProperty } = require('../../api/manageProperty/contrillers');
const router = express.Router();

router.get('/addProperty', addProperty);

module.exports=router;