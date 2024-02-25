const express = require("express")

const {addAppointment, getAppointments, getAppointmentsSeller,  updateStatus} =require("../../api/manageAppointment/controllers");

const router = express.Router();

router.post('/appointments', addAppointment);
router.get('/getAppointments', getAppointments);
router.get('/getAppointmentsSeller/:email',getAppointmentsSeller);
// router.put('/updateAppointmentStatus/:id', updateAppointmentStatus);
router.patch('/updateStatus/:id', updateStatus);
module.exports = router;