const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, jwtObject) => {
        if (err) {
          res.status(401).json({
            message: "You messed up the token somehow, did you mean to do this?"
          });
        } else {
          req.jwtObject = jwtObject;
          next();
        }
      });
    } else {
      res.status(401).json({ message: "You are not authorized" });
    }
  }