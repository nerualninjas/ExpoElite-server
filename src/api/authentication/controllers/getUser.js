const UserCollection = require("../../../models/user");

const getUser = async (req, res) => {
  const result = await UserCollection.find();
  res.send(result);
};
module.exports = getUser;
