const mongoose = require('mongoose');

const ThoughtSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Thought', ThoughtSchema);