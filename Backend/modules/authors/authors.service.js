const Author = require("./authors.schema")

const getAllAuthors = async (page, limit) => {
    const currentPage = Math.max(Number(page) || 1, 1)
    const pageSize = Math.max(Number(limit) || 10, 1)

    const [authors, totalAuthors] = await Promise.all([
        Author.find()
            .limit(pageSize)
            .skip((currentPage - 1) * pageSize),
        Author.countDocuments()
    ])

    return {
        authors,
        totalAuthors,
        totalPages: Math.ceil(totalAuthors / pageSize),
        currentPage
    }
}

const createAuthor = (authorData) => Author.create(authorData)

const getAuthorById = (authorId) => Author.findById(authorId)

const updateAuthor = (authorId, authorData) => (
    Author.findByIdAndUpdate(authorId, authorData, {
        new: true,
        runValidators: true
    })
)

const deleteAuthor = (authorId) => Author.findByIdAndDelete(authorId)

const updateAuthorAvatar = (authorId, avatar) => (
    Author.findByIdAndUpdate(authorId, { avatar }, { new: true })
)

module.exports = {
    getAllAuthors,
    createAuthor,
    getAuthorById,
    updateAuthor,
    deleteAuthor,
    updateAuthorAvatar
}
