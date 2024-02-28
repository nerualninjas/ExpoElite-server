const packegeDataCollection = require("../../models/packegeDataSchema");



const postPackege=async(req, res)=>{
    const {userId, productId, packege, amount} = req.query;
    console.log('from packege: ', userId, productId, packege, amount);
    const isExists = await packegeDataCollection.findOne({userId: userId});
    if(isExists){
        const update = await packegeDataCollection.updateOne(
            { userId: userId },
            { $set: { productId: productId, packege: packege, amount: amount } }
        );
        return res.send(update);
    }else{
        const create = await packegeDataCollection.create({userId: userId, productId: productId, packege: packege, amount: amount});
        return res.send(create);
    }
};

module.exports = postPackege;