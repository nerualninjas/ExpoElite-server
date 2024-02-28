const packegeDataCollection = require("../../models/packegeDataSchema");

const getPackege=async(req, res)=>{
    const {userId} = req.query;
    console.log('gellllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll');
    const getData = await packegeDataCollection.findOne({userId: userId});
    console.log(getData);
    res.send(getData);
};

module.exports = getPackege;