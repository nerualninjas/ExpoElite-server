const ChatsCollection = require("../../../models/ChatLogs");

const sendMessage=async(req, res)=>{
   const message = req.body;
   const insert = await ChatsCollection.create(message);
   res.send(insert);
};
module.exports=sendMessage;