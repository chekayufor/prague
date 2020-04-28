const mongoose = require('mongoose');

const ExcursionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    img: {
        data: Buffer,
        contentType: [String]
    },
    cost: {
        type: [String]
    },
    start: {
        type: String
    },
    duration: {
        type: String
    },
    included: {
        type: String
    },
    unincluded: {
        type: String
    },
    necessary: {
        type: String
    },
    location: {
        type: String
    },
    language: {
        type: [String]
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('excursion', ExcursionSchema);