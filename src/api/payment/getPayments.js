const PaymentCollection = require("../../models/paymentSchema");


const getPayments = async (req, res) => {
    const userEmail = req.params.email;
  const result = await PaymentCollection.findOne();
  res.send(result);
};
module.exports = getPayments;
