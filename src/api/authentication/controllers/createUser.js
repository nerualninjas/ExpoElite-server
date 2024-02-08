const userCollection = require("../../../models/userSchema");

const createUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  const query = { userEmail: user.userEmail };
  const existingUser = await userCollection.findOne(query);
  if (existingUser) {
    return res.send({ message: "user already register", insertedId: null });
  }
  const create = await userCollection.create(user);
  res.send({ message: "user registration successfully", insertedId: 1 });
};
module.exports = createUser;
