const jwt = require("jsonwebtoken"); // it only imports to used for access jsonwebtoken library in projects 

//Middleware is a function who  runs between response and request and ye next() k through control aageh pass krta hai ; 

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token = null;

  if(authHeader && authHeader.startsWith("Bearer")){
    token = authHeader.split(" ")[1]
  }
  if (!token) {
    return res.status(401).json({ message: "No token, access denied" });
  }

  try {
    const decoding = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoding.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Incorrect Token" });
  }
};

module.exports = auth;
