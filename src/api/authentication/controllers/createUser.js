const UserCollection = require("../../../models/user");

const createUser = async (req, res) => {
  const user = req.body;
  const query = { email: user.userEmail };
  const existingUser = await UserCollection.findOne(query);
  if (existingUser) {
    return res.send({ message: "user already register", insertedId: null });
  }
  const create = await UserCollection.create(user);
  res.send(create);
};
module.exports = createUser;
