const jwt = require("jsonwebtoken");

const createJWT = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
};

const decodedJWTToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
    createJWT,
    decodedJWTToken,
};
