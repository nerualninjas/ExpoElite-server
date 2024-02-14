const PaymentCollection = require("../../models/paymentSchema");

const getPayments = async (req, res) => {
const result = await PaymentCollection.find();
console.log(result);
res.send(result);
};
module.exports = getPayments;