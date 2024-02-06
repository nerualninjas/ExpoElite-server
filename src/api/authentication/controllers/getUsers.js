const userCollection = require("../../../models/userSchema");


const getUsers = async (req, res) => {
    const result = await userCollection.find();
    res.send(result);
  };
  
module.exports = getUsers;
