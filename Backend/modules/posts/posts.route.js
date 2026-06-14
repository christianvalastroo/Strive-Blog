const express = require("express")
const cloudinaryUploader = require("../../middlewares/multer")
const postsController = require("./posts.controller")

const postsRouter = express.Router()

postsRouter.get("/", postsController.getPosts)
postsRouter.post("/", postsController.createPost)
postsRouter.get("/:id", postsController.getPost)
postsRouter.put("/:id", postsController.updatePost)
postsRouter.delete("/:id", postsController.deletePost)
postsRouter.patch(
    "/:blogPostId/cover",
    cloudinaryUploader.single("cover"),
    postsController.uploadCover
)

module.exports = postsRouter
