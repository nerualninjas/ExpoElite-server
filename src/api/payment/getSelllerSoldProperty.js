const PaymentCollection = require("../../models/paymentSchema");

const getSelllerSoldProperty=async(req, res)=>{
   
    
    const mySoldProperty = await PaymentCollection.find({sellerEmail: req.params.email});
    console.log(mySoldProperty);
    res.send(mySoldProperty);
};
module.exports = getSelllerSoldProperty;