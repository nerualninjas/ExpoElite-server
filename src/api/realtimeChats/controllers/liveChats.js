const ChatsCollection = require("../../../models/chatLogsSchema");

const sendMessage = async (req, res) => {
   const senderEmail = req.query.senderEmail;
   const reciverEmail = req.query.reciverEmail;
   const propertyId = req.query.propertyId;
   const { message } = req.body;
   const dateObj = new Date();
   const dateString = dateObj.toISOString();
   const todayDate = dateString.substring(0, 10);
   const currentTime = dateString.substring(11, 16);
   const messageObj = {
      'sendBy': senderEmail,
      'sendTo': reciverEmail,
      'sendingDate': todayDate,
      'sendingTime': currentTime,
      'message': message
   };
   const firstQuery = {
      'conversationBetween': senderEmail + "&" + reciverEmail,
   };
   const secondQuery = {
      'conversationBetween': reciverEmail + "&" + senderEmail,
   };
   const isConversationExists = await ChatsCollection.findOne({
      $or: [firstQuery, secondQuery],
   });
   if(isConversationExists){
      const update = await ChatsCollection.updateOne(
         { $or: [firstQuery, secondQuery] },
         {
           $push: { chatLogs: messageObj },
         },
       );
       return res.send({message: `messege added in previous conversation. logs: ${update}`});
   }
   const createConversation = await ChatsCollection.create({
      'conversationBetween': senderEmail + "&" + reciverEmail,
      'propertyId' : propertyId,
      chatLogs: [messageObj],
   });
   res.send({message: `create a new conversation and send the message successfully. logs: ${createConversation}`})
};
module.exports = sendMessage;