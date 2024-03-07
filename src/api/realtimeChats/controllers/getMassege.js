const ChatsCollection = require("../../../models/chatLogsSchema");


const getMessage=async(req, res)=>{
    const chatId = req.query.id;
     const chats = await ChatsCollection.findOne({_id: chatId});
     res.send(chats);
};
module.exports = getMessage;
