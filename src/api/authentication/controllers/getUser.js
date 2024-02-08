const userCollection = require("../../../models/userSchema");


const getUser = async (req, res) => {
  
  const result = await userCollection.findOne({userEmail: req.params.userEmail});
  res.send(result);
};
module.exports = getUser;
