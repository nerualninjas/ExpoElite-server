
const { Schema, model } = require("mongoose");


const RentDataCollection = model('rentDataCollections', new Schema({}, { strict: false }));


module.exports = RentDataCollection;