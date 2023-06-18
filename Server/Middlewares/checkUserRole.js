const checkUserRole = (arr) => {
    return function (req, res, next) {
      if (arr.includes(req.body.role)) {
        next();
      } else {
        res.send("Not authorized");
      }
    };
  };
  
  module.exports = {
    checkUserRole
  };
  