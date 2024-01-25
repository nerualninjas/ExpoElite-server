const express = require('express');
const { addProperty, getProperty, getAllProperty, updateProperty, deleteProperty } = require('../../api/manageProperty/contrillers');
const router = express.Router();

router.post('/addProperty', addProperty);
router.get('/getProperty', getProperty);
router.get('/getAllProperty', getAllProperty);
router.put('/updateProperty', updateProperty);
router.delete('deleteProperty', deleteProperty);

module.exports=router;