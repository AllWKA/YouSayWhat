const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    nick: {
        type: String,
        required: [true, "nick is required"]
    },
    pts: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("player", UserSchema);