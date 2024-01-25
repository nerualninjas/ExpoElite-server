const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    propertyName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        validate: {
            validator: value => /^https?:\/\/.+\..+/i.test(value),
            message: props => `${props.value} is not a valid URL.`
        }
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    bedRoom: {
        type: Number,
        required: true
    },
    bathRoom: {
        type: Number,
        required: true
    },
    livingRoom: {
        type: Number,
        required: true
    },
    propertyType: {
        type: String,
        required: true
    },
    propertyDetails: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});
const PropertyCollection = model('Products', ProductSchema);

module.exports = PropertyCollection;