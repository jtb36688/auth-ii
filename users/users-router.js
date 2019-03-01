const router = require("express").Router();

const db = require("./users-module.js");
const restricted = require("../auth/restrictedMW.js");
const checkRole = require("../auth/checkdeptMW.js");

// router.get("/", restricted, (req, res) => {
//     db.find().then(users => {
//       res.json({ users, jwtObject: req.jwtObject });
//     });
//   });

// router.get("/", restricted, (req, res) => {
//   console.log(req.headers.department)
//   db.find().then(users => {
//     res.json(
//       users.map(user => {
//         if (user.department == req.headers.department) {
//           return user;
//         }
//       })
//     );
//   });
// });

router.get("/", restricted, (req, res) => {
  db.findBy({department: req.headers.department})
  .then(users => {
    res.json({ users, jwtObject: req.jwtObject });
  });
});

module.exports = router;
