const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(404).json({
        error: "Token not found.",
      });
    }

    let token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(404).json({
        error: "Token not found.",
      });
    }

    const decoded = jwt.verify(token, "gdshuhf7hbsdy87");

    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};


module.exports = authMiddleware;