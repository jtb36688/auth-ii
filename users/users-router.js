const router = require('express').Router();

const db = require('./users-module.js');
const restricted = require('../auth/restrictedMW.js');
const checkRole = require('../auth/checkdeptMW.js');

router.get("/", restricted, (req, res) => {
    db.find().then(users => {
      res.json({ users, jwtObject: req.jwtObject });
    });
  });
  
  module.exports = router;