const express = require('express');
const { addProperty } = require('../../api/manageProperty/contrillers');
const router = express.Router();

router.post('/addProperty', addProperty);

module.exports=router;