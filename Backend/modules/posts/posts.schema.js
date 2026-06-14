const mongoose = require("mongoose")
const commentSchema = require("../comments/comments.schema")
require("../authors/authors.schema")

const blogPostSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        cover: String,
        readTime: {
            value: Number,
            unit: String
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author",
            required: true
        },
        content: {
            type: String,
            required: true
        },
        comments: [commentSchema]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("BlogPost", blogPostSchema)
