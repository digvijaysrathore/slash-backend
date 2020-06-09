const mongoose = require("mongoose");
const Schema = mongoose.Schema

const docSchema = new Schema({
    dockey: {
        type: String,
        required: true
    },
    userkey: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    comments: []
}, {timestamps: true});

module.exports = mongoose.model("Doc", docSchema);