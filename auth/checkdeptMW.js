module.exports = role => {
    return function(req, res, next) {
      if (req.jwtObject.department && req.jwtObject.department.includes(department)) {
        next();
      } else {
        res.status(403).json({ you: 'you have no power here!' });
      }
    };
  };
  