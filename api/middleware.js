const cors = require("cors");
const express = require("express");

module.exports = server => {
server.use(express.json());
server.use(cors({ credentials: true, origin: true }));
}