const userCollection = require("../../../models/user");

const getUser = async (req, res) => {
  const result = await userCollection.find();
  res.send(result);
};
module.exports = getUser;
