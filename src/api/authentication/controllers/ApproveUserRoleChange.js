const userCollection = require("../../../models/userSchema")

const ApproveUserRoleChange = async (req, res) => {
    const data = req.body;
    console.log(data);
  const result = await userCollection.updateOne({_id: req.params.id},
    {$set:{
        userRole: "Seller",
        roleStatus: "Approved",
        
    }});
  res.send(result);
};
module.exports = ApproveUserRoleChange;