const PaymentCollection = require("../../../models/paymentSchema");

const getSoldProperty = async (req, res) => {
    const soldPropertyId = req.params.id;
    console.log(soldPropertyId)
    const soldProperty = await PaymentCollection.findOne({ _id: new Object(soldPropertyId) });
    console.log(soldProperty);
    res.send(soldProperty);
};

module.exports = getSoldProperty;


