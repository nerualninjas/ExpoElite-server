const userCollection = require("../../../models/userSchema")

const updateMemberShip = async (req, res) => {
    const data = req.body;

  const result = await userCollection.updateOne({userEmail: req.params.email},
    {$set:{
        membership: data.membership,
        amount: data.amount,
        sellerRegStartDate: data.sellerRegStartDate,
        sellerExpireDate: data.sellerExpireDate,
        sellerRegStatus: data.sellerRegStatus,
        roleStatus: "pending",
    }});
  res.send(result);
};

module.exports = updateMemberShip;