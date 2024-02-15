const PaymentCollection = require("../../../models/paymentSchema");

const deleteSoldProperty = async (req, res) => {
    const soldPropertyId = req.params.id;
    console.log(soldPropertyId);
    const remove = await PaymentCollection.deleteOne({
        _id: soldPropertyId,
    });
    res.send(remove);
};

module.exports = deleteSoldProperty;

