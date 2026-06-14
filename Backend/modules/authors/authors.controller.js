const AppError = require("../../exceptions/AppError")
const authorsService = require("./authors.service")

const getAuthors = async (req, res) => {
    const result = await authorsService.getAllAuthors(
        req.query.page,
        req.query.limit
    )

    res.status(200).json({
        statusCode: 200,
        message: "OK",
        count: result.totalAuthors,
        totalPages: result.totalPages,
        currentPage: result.currentPage,
        data: result.authors
    })
}

const createAuthor = async (req, res) => {
    const author = await authorsService.createAuthor(req.body)

    res.status(201).json({
        statusCode: 201,
        message: "Created",
        data: author
    })
}

const getAuthor = async (req, res) => {
    const author = await authorsService.getAuthorById(req.params.id)

    if (!author) {
        throw new AppError(404, "Author not found")
    }

    res.status(200).json({
        statusCode: 200,
        message: "OK",
        data: author
    })
}

const updateAuthor = async (req, res) => {
    const author = await authorsService.updateAuthor(req.params.id, req.body)

    if (!author) {
        throw new AppError(404, "Author not found")
    }

    res.status(200).json({
        statusCode: 200,
        message: "Author updated",
        data: author
    })
}

const deleteAuthor = async (req, res) => {
    const author = await authorsService.deleteAuthor(req.params.id)

    if (!author) {
        throw new AppError(404, "Author not found")
    }

    res.status(200).json({
        statusCode: 200,
        message: "Author deleted"
    })
}

const uploadAvatar = async (req, res) => {
    if (!req.file) {
        throw new AppError(400, "Avatar file is required")
    }

    const author = await authorsService.updateAuthorAvatar(
        req.params.authorId,
        req.file.path
    )

    if (!author) {
        throw new AppError(404, "Author not found")
    }

    res.status(200).json({
        statusCode: 200,
        message: "Avatar uploaded",
        data: author
    })
}

module.exports = {
    getAuthors,
    createAuthor,
    getAuthor,
    updateAuthor,
    deleteAuthor,
    uploadAvatar
}
