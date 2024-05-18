const { JWT_SECRET } = require("./config");
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Check if the Authorization header exists in the request
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        // If Authorization header is missing or doesn't start with 'Bearer ', send a 403 forbidden response
        return res.status(403).json({});
    }

    // Extract the token from the authorization header
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({});
        }

    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
};
