const ChatsCollection = require("../../../models/chatLogsSchema");


const getAllMessage=async(req, res)=>{
     const chats = await ChatsCollection.find();
     res.send(chats);
};
module.exports = getAllMessage;