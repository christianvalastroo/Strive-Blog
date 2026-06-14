const BlogPost = require("../posts/posts.schema")

const createComment = (postId, commentData) => (
    BlogPost.findByIdAndUpdate(
        postId,
        { $push: { comments: commentData } },
        { new: true, runValidators: true }
    )
)

const getPostWithComments = (postId) => BlogPost.findById(postId)

const updateComment = (postId, commentId, commentData) => (
    BlogPost.findOneAndUpdate(
        {
            _id: postId,
            "comments._id": commentId
        },
        {
            $set: {
                "comments.$.name": commentData.name,
                "comments.$.comment": commentData.comment
            }
        },
        {
            new: true,
            runValidators: true
        }
    )
)

const deleteComment = (postId, commentId) => (
    BlogPost.findOneAndUpdate(
        {
            _id: postId,
            "comments._id": commentId
        },
        {
            $pull: {
                comments: { _id: commentId }
            }
        },
        { new: true }
    )
)

module.exports = {
    createComment,
    getPostWithComments,
    updateComment,
    deleteComment
}
