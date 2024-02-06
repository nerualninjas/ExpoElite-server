const userCollection = require("../../../models/userSchema")

const userRoleUpByAdmin = async (req, res) => {
    const data = req.body;
    console.log(data);
  const result = await userCollection.updateOne({_id: req.params.id},
    {$set:{
        userRole: data.userRole,
        // userRole: "Seller",
        roleStatus: "Approved",
    }});
  res.send(result);
};
module.exports = userRoleUpByAdmin;