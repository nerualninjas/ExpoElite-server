const ChatsCollection = require("../../../models/chatLogsSchema");


const getMessage=async(req, res)=>{
    const senderEmail = req.query.senderEmail;
     const chats = await ChatsCollection.findOne({senderEmail: senderEmail});
     res.send(chats);
};
module.exports = getMessage;
