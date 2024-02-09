const PaymentCollection = require("../../models/paymentSchema");

const addPayment = async (req, res) => {
    const payment = req.body;
      console.log(payment);
    const create = await PaymentCollection.create(payment);
    res.send(create);
  };
  module.exports = addPayment;