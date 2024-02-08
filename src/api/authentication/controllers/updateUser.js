const userCollection = require("../../../models/userSchema")

const updateUser = async (req, res) => {
    const userData = req.body;
  const result = await userCollection.updateOne({_id: req.params.id},
    {$set:{
        userName: userData.userName,
        userPhoto: userData.userPhoto,
    }});
  res.send(result);
};
module.exports = updateUser;