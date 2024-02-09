
const { Schema, model } = require("mongoose");


const PaymentCollection = model('paymnet', new Schema({}, { strict: false }));


module.exports = PaymentCollection;