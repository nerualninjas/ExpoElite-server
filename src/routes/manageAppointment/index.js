const express = require("express")

const {addAppointment, getAppointments, getAppointmentsSeller} =require("../../api/manageAppointment/controllers");

const router = express.Router();

router.post('/appointments', addAppointment);
router.get('/getAppointments', getAppointments);
router.get('/getAppointmentsSeller/:email',getAppointmentsSeller);

module.exports = router;