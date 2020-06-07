const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    image: {
        type: String,
        default: null
    },
    userkey: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    docs: [],
    upvote: {
        type: Number,
        default: 1
    }
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema)