const express = require("express")

const {addAppointment, getAppointments, getAppointmentsSeller,  updateStatus, getAppointmentsUser} =require("../../api/manageAppointment/controllers");

const router = express.Router();

router.post('/appointments', addAppointment);
router.get('/getAppointments', getAppointments);
router.get('/getAppointmentsSeller/:email',getAppointmentsSeller);
router.get('/getAppointmentsUser/:email',getAppointmentsUser);
router.patch('/updateStatus/:id', updateStatus);
module.exports = router;