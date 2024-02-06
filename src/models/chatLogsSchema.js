const { Schema, model } = require('mongoose');

// const ChatSchema = new Schema({
//     message: {
//       type: String,
//       required: true,
//     }
//   });
// const ChatsCollection = model('ChatLogs', ChatSchema);
const ChatsCollection = model('ChatLogs', new Schema({}, { strict: false }));

module.exports=ChatsCollection;