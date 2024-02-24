const AppointmentCollection = require("../../../models/appointmentSchema");

const getAppointments = async (req, res) => {
 
  const appointments = await AppointmentCollection.find();
  res.send(appointments);
};
module.exports = getAppointments;

