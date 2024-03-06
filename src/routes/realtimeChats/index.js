const express = require('express');
const { sendMessage, getMessage, getAllMessage } = require('../../api/realtimeChats/controllers');
const router = express.Router();

router.post('/sendMessage', sendMessage);
router.get('/getMessage', getMessage);
router.get('/getAllconver', getAllMessage);

module.exports=router;