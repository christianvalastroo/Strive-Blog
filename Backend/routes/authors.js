const express = require("express")

const authorsRouter = express.Router()

authorsRouter.get("/", (req, res) => {
    res.send("Lista autori")
})

module.exports = authorsRouter