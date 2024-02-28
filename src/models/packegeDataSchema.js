
const { Schema, model } = require("mongoose");


const packegeDataCollection = model('packegeData', new Schema({}, { strict: false }));


module.exports = packegeDataCollection;