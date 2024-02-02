<<<<<<< HEAD
const { Schema, model } = require('mongoose');
=======
const { Schema, model } = require("mongoose");

>>>>>>> 34ac2df21d7f54e20a50495c32b81d0e13439792
// ------------------------------------UsingSchema----------------------------------------
const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  userPhoto: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    enum: ["user", "Admin", "Seller", "Buyer"],
    required: true,
  },
});

<<<<<<< HEAD
const UserCollection = model('Users', UserSchema);
module.exports=UserCollection;
=======
const UserCollection = model("users", UserSchema);

module.exports = UserCollection;
>>>>>>> 34ac2df21d7f54e20a50495c32b81d0e13439792
