const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const secret = "100wordbackupjwtsecret";

const db = require("./users/users-module.js");
const dbConfig = require("./data/dbConfig.js");

const server = express();
server.use(express.json());
server.use(cors({ credentials: true, origin: true }));
// server.use("/api/restricted", restricted);

const makejwt = user => {
  const payload = {
    subject: user.id,
    username: user.username,
    departments: []
  };
  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, secret, options);
};



server.post("/api/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12); // 2 ^ n
    user.password = hash;
    db.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

server.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    db.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = makejwt(user);
          res.status(200).json({ message: `welcome ${user.username}`, token });
        } else {
          res.status(401).json({ message: "You shall not pass!" });
        }
      });
  });
  
server.get("/api/users", restricted, (req, res) => {
    db.find()
    .then(users => {
        res.json({ users, jwtObject: req.jwtObject })
    })
})

function restricted(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, secret, (err, jwtObject) => {
        if (err) {
          res
            .status(401)
            .json({
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
  };

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));