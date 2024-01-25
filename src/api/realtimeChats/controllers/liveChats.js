const ChatsCollection = require("../../../models/ChatLogs");

const sendMessage = async (req, res) => {
   const senderEmail = req.query.email;
   const reciverEmail = req.query.email;
   const { message } = req.body;
   const firstQuery = {
      'conversationBetween': senderEmail + "&" + reciverEmail,
   }
   const secondQuery = {
      'conversationBetween': reciverEmail + "&" + senderEmail,
   }
   const isConversationExists = await ChatsCollection.findOne({
      $or: [firstQuery, secondQuery],
   });
   if(isConversationExists){
      const update = await ChatsCollection.updateOne(
         { $or: [firstQuery, secondQuery] },
         {
           $push: { chatLogs: message },
         },
       );
       return res.send({message: `messege added in previous conversation. logs: ${update}`});
   }
   
};
module.exports = sendMessage;