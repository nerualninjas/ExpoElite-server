const appointmentCollection = require("../../../models/appointmentSchema");

const getAppointments = async (req, res) => {
 
  const appointments = await appointmentCollection.find();
  res.send(appointments);
};
module.exports = getAppointments;

