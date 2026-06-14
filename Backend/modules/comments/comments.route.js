const express = require("express")
const commentsController = require("./comments.controller")

const commentsRouter = express.Router({ mergeParams: true })

commentsRouter.get("/", commentsController.getComments)
commentsRouter.post("/", commentsController.createComment)
commentsRouter.get("/:commentId", commentsController.getComment)
commentsRouter.put("/:commentId", commentsController.updateComment)
commentsRouter.delete("/:commentId", commentsController.deleteComment)

module.exports = commentsRouter
