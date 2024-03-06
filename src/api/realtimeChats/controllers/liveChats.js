const ChatsCollection = require("../../../models/chatLogsSchema");

const sendMessage = async (req, res) => {
   const senderEmail = req.query.senderEmail;
   const user = req.query.user;
   const { message } = req.body;
   const dateObj = new Date();
   const dateString = dateObj.toISOString();
   const todayDate = dateString.substring(0, 10);
   const currentTime = dateString.substring(11, 16);
   const messageObj = {
      "sendBy": user,
      'sendingDate': todayDate,
      'sendingTime': currentTime,
      'message': message
   };
  
   const isExists = await ChatsCollection.findOne({senderEmail: senderEmail});

   if(isExists){
      const update = await ChatsCollection.updateOne(
         { senderEmail: senderEmail },
         {
           $push: { chatLogs: messageObj },
         },
       );
       return res.send({message: `messege added in previous conversation. logs: ${update}`});
   }
   const createConversation = await ChatsCollection.create({
      'senderEmail': senderEmail ,
      chatLogs: [messageObj],
   });
   res.send({message: `create a new conversation and send the message successfully. logs: ${createConversation}`})
};
module.exports = sendMessage;