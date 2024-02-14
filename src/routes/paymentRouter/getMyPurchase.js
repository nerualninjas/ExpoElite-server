const PaymentCollection = require("../../models/paymentSchema");


const getMyPurchase = async (req, res) => {
    const userEmail = req.params.email;
  const result = await PaymentCollection.findOne({email:userEmail});
  console.log(result);
  res.send(result);
};
module.exports = getMyPurchase;
