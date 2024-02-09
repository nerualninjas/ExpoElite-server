const PaymentCollection = require("../../models/paymentSchema");

const addPayment = async (req, res) => {
  const property = req.body;
  console.log(property);
  const create = await PaymentCollection.create(property);
  res.send(create);
};
module.exports = addPayment;
