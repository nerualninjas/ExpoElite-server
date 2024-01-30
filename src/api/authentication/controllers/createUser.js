const UserCollection = require("../../../models/user");

const createUser = async (req, res) => {
  const user = req.body;
  const create = await UserCollection.create(user);
  res.send(create);
};
module.exports = createUser;
