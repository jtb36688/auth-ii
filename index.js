const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const secret = process.env.JWTSECRET || "100wordbackupjwtsecret"

const db = require("./users/users-model.js");
const dbConfig = require("./data/dbConfig.js")

const server = express();
server.use(express.json());
server.use(cors({ credentials: true, origin: true }));
server.use("/api/restricted", restricted);
server.use(session(sessionConfig));

const makejwt = (user) => {
    const payload = {
        subject: user.id,
        username: user.username,
        department: []
    }
    const options = {
        expiresIn: "8h"
    }
    return jwt.sign(payload, options)
}

server.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    db.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = makejwt(user);
            res.status(200).json({message: `welcome ${user.username}`,
        token})
        } else {
            res.status(401).json({ message: "You shall not pass!" });
        }
    })
})