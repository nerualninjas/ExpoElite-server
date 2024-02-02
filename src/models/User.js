const { Schema, model } = require("mongoose");

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

const UserCollection = model("users", UserSchema);

module.exports = UserCollection;
