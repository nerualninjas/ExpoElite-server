const { Schema, model } = require('mongoose');

const ChatSchema = new Schema({
    message: {
      type: String,
      required: true,
    }
  });

const ChatsCollection = model('ChatLogs', ChatSchema);

module.exports=ChatsCollection;