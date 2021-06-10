const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kitchenSchema = new Schema({
    owner: {
        type: String,
        required: true,
    },
    restaurant: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    email: {
        type: String,
        required: true,
    },
    contact_no: {
        type: Number,
        minlength: 10,
        required: true,
    },
    cost: {
        type: Number,
    }

})
module.exports = Kitchen = mongoose.model('kitchen', kitchenSchema);