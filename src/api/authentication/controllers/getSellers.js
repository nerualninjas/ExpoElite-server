const userCollection = require("../../../models/userSchema");


const getSellers = async (req, res) => {
    const result = await userCollection.find({ userRole: 'Seller' });
    res.send(result);
  };
  
module.exports = getSellers;
