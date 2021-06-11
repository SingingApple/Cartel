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
    image: {
        type: String,
    },
    fssai: {
        type: String,
        required: true,
    },
    time: {
        type: String,
    },
    contact_no: {
        type: Number,
        minlength: 10,
        required: true,
    },
    cost: {
        type: Number,
    },
    northEastern: {
        type: Boolean,
        default: false,
    },
    southIndian: {
        type: Boolean,
        default: false,
    },
    bihari: {
        type: Boolean,
        default: false,
    },
    bengali: {
        type: Boolean,
        default: false,
    },
    punjabi: {
        type: Boolean,
        default: false,
    },
    gujarati: {
        type: Boolean,
        default: false,
    },
    kashmiri: {
        type: Boolean,
        default: false,
    },
    maharashtrain: {
        type: Boolean,
        default: false,
    },
    rajasthani: {
        type: Boolean,
        default: false,
    },


}, { timestamps: true })
module.exports = Kitchen = mongoose.model('kitchen', kitchenSchema);