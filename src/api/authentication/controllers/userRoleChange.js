const userCollection = require("../../../models/userSchema")

const userRoleUpByAdmin = async (req, res) => {
    const data = req.body;
  
  const result = await userCollection.updateOne({_id: req.params.id},
    {$set:{
        
        roleStatus: data.roleStatus,
        // userRole: "Admin",
        // roleStatus: "Approved",
    }});
  res.send(result);
};
module.exports = userRoleUpByAdmin;