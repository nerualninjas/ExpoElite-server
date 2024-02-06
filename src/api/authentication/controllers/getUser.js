const userCollection = require("../../../models/userSchema");

const getUser = async (req, res) => {
  const result = await userCollection.find();
  res.send(result);
};
module.exports = getUser;
