const jwt = require("jsonwebtoken");
const jwt_key = process.env.JWT_KEY;
module.exports = (req, res, next) => {
  //What exactly next do?
  try {
    const token = req.headers.authorization.split(" ");
    const decoded = jwt.verify(token[1], jwt_key);
    //req.userData is used to eventually get the data from the user, from the token
    req.userData = decoded;
  } catch (error) {
    return res.status(401).json({
      message: "Authentication Failed"
    });
  }
  next();
};
