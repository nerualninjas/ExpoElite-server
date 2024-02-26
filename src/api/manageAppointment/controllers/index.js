const addAppointment = require("./addAppointment");
const getAppointments = require("./getAppointments");
const getAppointmentsSeller = require("./getAppointmentsSeller")
// const updateAppointmentStatus= require("./updateAppointmentStatus")
const updateStatus=require("./updateStatus")
const getAppointmentsUser = require("./getAppointmentsUser")


module.exports = {
  addAppointment,
  getAppointments,
  getAppointmentsSeller,
  updateStatus,
  getAppointmentsUser,

};
