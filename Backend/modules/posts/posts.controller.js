const AppError = require("../../exceptions/AppError")
const postsService = require("./posts.service")

const getPosts = async (req, res) => {
    const posts = await postsService.getAllPosts()

    res.status(200).json({
        statusCode: 200,
        message: "OK",
        data: posts
    })
}

const createPost = async (req, res) => {
    const post = await postsService.createPost(req.body)

    res.status(201).json({
        statusCode: 201,
        message: "Created",
        data: post
    })
}

const getPost = async (req, res) => {
    const post = await postsService.getPostById(req.params.id)

    if (!post) {
        throw new AppError(404, "Blog post not found")
    }

    res.status(200).json({
        statusCode: 200,
        message: "OK",
        data: post
    })
}

const updatePost = async (req, res) => {
    const post = await postsService.updatePost(req.params.id, req.body)

    if (!post) {
        throw new AppError(404, "Blog post not found")
    }

    res.status(200).json({
        statusCode: 200,
        message: "Blog post updated",
        data: post
    })
}

const deletePost = async (req, res) => {
    const post = await postsService.deletePost(req.params.id)

    if (!post) {
        throw new AppError(404, "Blog post not found")
    }

    res.status(200).json({
        statusCode: 200,
        message: "Blog post deleted"
    })
}

const uploadCover = async (req, res) => {
    if (!req.file) {
        throw new AppError(400, "Cover file is required")
    }

    const post = await postsService.updatePostCover(
        req.params.blogPostId,
        req.file.path
    )

    if (!post) {
        throw new AppError(404, "Blog post not found")
    }

    res.status(200).json({
        statusCode: 200,
        message: "Cover uploaded",
        data: post
    })
}

module.exports = {
    getPosts,
    createPost,
    getPost,
    updatePost,
    deletePost,
    uploadCover
}
