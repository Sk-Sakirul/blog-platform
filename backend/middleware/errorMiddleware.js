
const errorMiddleware = (err, req, res, next) => {
    let statusCode = err.status || 500;
    return res.status(statusCode).json({
        error : err.message || "Something went wrong"
    })
}

module.exports = errorMiddleware;