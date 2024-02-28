const AppointmentCollection = require("../../../models/appointmentSchema")

const updateStatus = async (req, res) => {
const id = req.params.id;
const data= req.body;
console.log(id);
console.log(data);

    try {
        const updatedProperty = await AppointmentCollection.updateOne({_id:req.params.id},
            { $set: { appointmentStatus: data.appointmentStatus, } });
            

        if (!updatedProperty) {
            return res.status(404).json({ success: false, message: 'Property not found' });
        }

        res.status(200).json({ success: true, data: updatedProperty });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }

  }


    module.exports = updateStatus;