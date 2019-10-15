const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    nick: {
        type: String,
        required: [true, "nick is required"]
    }
});

module.exports = mongoose.model("room", UserSchema);