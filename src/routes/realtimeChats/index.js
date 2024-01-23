const express = require('express');
const { sendMessage } = require('../../api/realtimeChats/controllers');
const router = express.Router();

router.post('/sendMessage', sendMessage);

module.exports=router;