const express = require("express")

const {addAppointment} =require("../../api/manageAppointment/controllers");

const router = express.Router();

router.post('/appointments', addAppointment);


module.exports = router;