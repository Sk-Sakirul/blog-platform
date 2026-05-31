
const loggerMiddleware = (req, res, next) => {
    let timeStamp = new Date().toISOString()
    console.log(`${req.method} ${req.url} ${timeStamp}`)
    next();
}

module.exports = loggerMiddleware;