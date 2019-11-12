const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "content is required"]
    },
    author: {
        type: String,
        default: 'AllWKa'
    }
});

module.exports = mongoose.model("black", UserSchema);