const AppointmentCollection = require("../../../models/appointmentSchema");

const getAppointmentsUser = async (req, res) => {
  const email=req.params.email;
console.log(email);
  const userAppointments = await AppointmentCollection.find({ userEmail: email });
  res.send(userAppointments);
};
module.exports = getAppointmentsUser;

