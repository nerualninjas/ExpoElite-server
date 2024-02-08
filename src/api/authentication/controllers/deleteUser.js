const userCollection = require("../../../models/userSchema")

const deleteUser = async (req, res) => {
   
  const result = await userCollection.deleteOne({_id: req.params.id});
  res.send(result);
};
module.exports = deleteUser;