const express = require("express");


const router = express.Router();
const addPayment = require("./addPayment.js");
const showPayment = require("./showPayment.js");
const getMyPurchase = require("./getMyPurchase.js");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
router.post("/addPayment", addPayment);
router.get("/showPayment", showPayment);
router.get("/getMyPurchase/:email", getMyPurchase);


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
