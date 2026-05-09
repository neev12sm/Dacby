

const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
    title: String,
    url: String,
    author: String,
    points: Number,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Bookmark", bookmarkSchema);