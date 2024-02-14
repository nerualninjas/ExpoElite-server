const PaymentCollection = require("../../models/paymentSchema");


const getPayments = async (req, res) => {
  const userEmail = req.params.email;
const result = await PaymentCollection.findOne();
console.log(result);
res.send(result);
};
module.exports = getPayments;