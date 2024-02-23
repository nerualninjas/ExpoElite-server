const appointmentCollection = require("../../../models/appointmentSchema");

const addAppointment = async (req, res) => {
  const appointment = req.body;
    console.log(appointment);
  const create = await appointmentCollection.create(appointment);
  res.send(create);
};
module.exports = addAppointment;
