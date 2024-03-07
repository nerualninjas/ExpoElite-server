const PaymentCollection = require("../../models/paymentSchema");

const showPayment = async (req, res) => {
  try {
    const payments = await PaymentCollection.find({ email: req.params.email });
    
    if (!payments) {
      return res.status(404).json({ error: "No payments found for the given email" });
    }
    res.json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = showPayment;
