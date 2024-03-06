const express = require("express");


const router = express.Router();
const addPayment = require("./addPayment.js");
const showPayment = require("./showPayment.js");
const getPayments = require("./getPayments.js");
const getSelllerSoldProperty = require("../../api/payment/getSelllerSoldProperty.js");
const getTotalPaymentSeller = require("../../api/payment/getTotalPaymentSeller.js");


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
router.post("/addPayment", addPayment);
router.get("/showPayment", showPayment);
router.get("/getPayments", getPayments);
router.get("/getSelllerSoldProperty/:email",getSelllerSoldProperty);
router.get("/getTotalPaymentSeller/:email",getTotalPaymentSeller)



router.post("/create-payment-intent", async (req, res) => {
  console.log("hello");
  const { price } = req.body;
  const amount = parseInt(price * 100);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});




module.exports = router;
