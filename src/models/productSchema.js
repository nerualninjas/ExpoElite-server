const { Schema, model } = require('mongoose');

// const ProductSchema = new Schema({
//    comming soon
//   });
// const ProductCollection = model('Products', ProductSchema);

const PropertyCollection = model('Products', new Schema({}, { strict: false }));

module.exports=PropertyCollection;