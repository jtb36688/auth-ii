const express = require('express');

const secrets = require("../config/secrets.js");

const configMW = require("../api/middleware.js")
const authRouter = require("../auth/auth-router.js")
const usersRouter = require('../users/users-router.js');

const server = express();

configMW(server);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send("Why are you looking at my root?")
})

module.exports = server;