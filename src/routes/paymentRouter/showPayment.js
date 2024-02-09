const PaymentCollection = require("../../models/paymentSchema");

const showPayment = async (req, res) => {
  try {
    const email = req.query?.email;

    if (!email) {
      return res.status(400).json({ error: "Email parameter is missing" });
    }

    const payments = await PaymentCollection.find({ email });
    
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
