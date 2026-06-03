const mongoose = require("mongoose")

const blogPostSchema = new mongoose.Schema(
    {
        categoria: {
            type: String,
            required: true
        },
        titolo: {
            type: String,
            required: true
        },
        cover: {
            type: String
        },
        readTime: {
            value: Number,
            unit: String
        },
        autore: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author",
            required: true
        },
        contenuto: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("BlogPost", blogPostSchema)