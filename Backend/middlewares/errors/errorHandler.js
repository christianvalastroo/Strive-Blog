const errorHandler = (error, req, res, next) => {
    let statusCode = error.statusCode || 500

    if (error.name === "ValidationError" || error.name === "CastError") {
        statusCode = 400
    }

    if (error.code === 11000) {
        statusCode = 409
    }

    res.status(statusCode).json({
        statusCode,
        message: statusCode === 500 ? "Internal Server Error" : error.message
    })
}

module.exports = errorHandler
