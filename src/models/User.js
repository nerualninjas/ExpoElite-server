const { Schema, model } = require('mongoose');

// ------------------------------------UsingSchema----------------------------------------
// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     }
// });

// const UserCollection = model('Users', UserSchema);

// --------------------------------------NoSchema--------------------------------------

const UserCollection = model('Users', new Schema({}, { strict: false }));



module.exports=UserCollection;