const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    Code: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Qty: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    Tags: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', todoSchema);