const BlogPost = require("./posts.schema")

const getAllPosts = () => BlogPost.find().populate("author")

const createPost = (postData) => BlogPost.create(postData)

const getPostById = (postId) => (
    BlogPost.findById(postId).populate("author")
)

const updatePost = (postId, postData) => (
    BlogPost.findByIdAndUpdate(postId, postData, {
        new: true,
        runValidators: true
    }).populate("author")
)

const deletePost = (postId) => BlogPost.findByIdAndDelete(postId)

const updatePostCover = (postId, cover) => (
    BlogPost.findByIdAndUpdate(postId, { cover }, { new: true })
)

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost,
    updatePostCover
}
