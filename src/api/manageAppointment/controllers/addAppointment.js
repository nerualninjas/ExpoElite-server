const AppointmentCollection = require("../../../models/appointmentSchema");

const addAppointment = async (req, res) => {
  const appointment = req.body;
    console.log(appointment);
  const create = await AppointmentCollection.create(appointment);
  res.send(create);
};
module.exports = addAppointment;
