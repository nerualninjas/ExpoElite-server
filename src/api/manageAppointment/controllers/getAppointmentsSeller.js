const AppointmentCollection = require("../../../models/appointmentSchema");

const getAppointmentsSeller = async (req, res) => {
  const email=req.params.email;
console.log(email);
  const sellerAppointments = await AppointmentCollection.find({ sellerEmail: email });
  res.send(sellerAppointments);
};
module.exports = getAppointmentsSeller;

