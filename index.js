const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const db = require("./data/user-model.js");
const dbConfig = require("./data/dbConfig.js")

const server = express();
server.use(express.json());
server.use(cors({ credentials: true, origin: true }));
server.use("/api/restricted", restricted);
server.use(session(sessionConfig));