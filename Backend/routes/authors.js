const express = require("express")
const Author = require("../models/Author")

const authorsRouter = express.Router()

// GET tutti gli autori
authorsRouter.get("/", async (req, res) => {
    try {
        const authors = await Author.find()

        res.status(200).json({
            statusCode: 200,
            message: "OK",
            data: authors
        })

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Internal Server Error"
        })
    }
})

// POST crea autore
authorsRouter.post("/", async (req, res) => {
    try {
        const newAuthor = new Author(req.body)

        const savedAuthor = await newAuthor.save()

        res.status(201).json({
            statusCode: 201,
            message: "Created",
            data: savedAuthor
        })

    } catch (error) {
        res.status(400).json({
            statusCode: 400,
            message: "Bad Request"
        })
    }
})

module.exports = authorsRouter