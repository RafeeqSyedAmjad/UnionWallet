const { JWT_SECRET } = require("./config");
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
 // Check if the Authorization headers exists in the request
 const authHeader = req.headers.authorization;

 if (!authHeader || !authHeader.startWith('Bearer ')) {
    // If Authorization header is missing or doesnt start with 'Bearer ', send a 403 forbidden response
     return res.status(403).json({});
 }

 // Extract the token from the authorization header
 const token = authHeader.split(' ')[1];

 try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if(decoded.userId) {
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
}
