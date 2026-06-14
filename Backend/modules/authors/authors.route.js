const express = require("express")
const cloudinaryUploader = require("../../middlewares/multer")
const authorsController = require("./authors.controller")

const authorsRouter = express.Router()

authorsRouter.get("/", authorsController.getAuthors)
authorsRouter.post("/", authorsController.createAuthor)
authorsRouter.get("/:id", authorsController.getAuthor)
authorsRouter.put("/:id", authorsController.updateAuthor)
authorsRouter.delete("/:id", authorsController.deleteAuthor)
authorsRouter.patch(
    "/:authorId/avatar",
    cloudinaryUploader.single("avatar"),
    authorsController.uploadAvatar
)

module.exports = authorsRouter
