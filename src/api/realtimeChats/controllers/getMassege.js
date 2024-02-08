const ChatsCollection = require("../../../models/chatLogsSchema");


const getMessage=async(req, res)=>{
    const senderEmail = req.query.senderEmail;
    const reciverEmail = req.query.reciverEmail;
    const propertyId = req.query.propertyId;
    console.log(senderEmail, reciverEmail, propertyId )
    console.log('hello');
    const firstQuery = {
        'conversationBetween': senderEmail + "&" + reciverEmail,
     };
     const secondQuery = {
        'conversationBetween': reciverEmail + "&" + senderEmail,
     };
     const chats = await ChatsCollection.findOne({
        $or: [firstQuery, secondQuery],
        propertyId: propertyId
      });
     res.send(chats);
};
module.exports = getMessage;
