const { Schema, model } = require("mongoose");

// const ProductSchema = new Schema({
//   propertySellerName: {
//     type: String,
//     // required: true,
//   },
//   propertySellerEmail: {
//     type: String,
//     // required: true,
//   },
//   propertyName: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     // required: true,
//     // validate: {
//     //   validator: (value) => /^https?:\/\/.+\..+/i.test(value),
//     //   message: (props) => `${props.value} is not a valid URL.`,
//     // },
//   },
//   quantity: {
//     type: Number,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   bedrooms: {
//     type: Number,
//     required: true,
//   },
//   bathrooms: {
//     type: Number,
//     required: true,
//   },
//   livingRoom: {
//     type: Number,
//     required: true,
//   },
//   propertyType: {
//     type: String,
//     required: true,
//   },
//   propertyDetails: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//   },
// });
const PropertyCollection = model('products', new Schema({}, { strict: false }));
// const PropertyCollection = model("products", ProductSchema);

module.exports = PropertyCollection;
