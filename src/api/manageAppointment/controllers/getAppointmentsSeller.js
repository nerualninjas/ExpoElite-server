const appointmentCollection = require("../../../models/appointmentSchema");

const getAppointmentsSeller = async (req, res) => {
  const email=res.query?.email;
console.log(email);
  const sellerAppointments = await appointmentCollection.find({ sellerEmail: email });
  res.send(sellerAppointments);
};
module.exports = getAppointmentsSeller;

