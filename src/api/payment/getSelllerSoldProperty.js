const PaymentCollection = require("../../models/paymentSchema");

const getSelllerSoldProperty=async(req, res)=>{
   
    
    const mySoldProperty = await PaymentCollection.find({email: req.params.email});
    console.log(mySoldProperty);
    res.send(mySoldProperty);
};
module.exports = getSelllerSoldProperty;