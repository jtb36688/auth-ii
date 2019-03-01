const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets.js')

module.exports = {
    makejwt
}

function makejwt(user) {
    const payload = {
      subject: user.id,
      username: user.username,
      departments: []
    };
    const options = {
      expiresIn: "8h"
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
  };

