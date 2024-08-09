const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
  const token = req.headers['x-auth-token'];
  
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
  
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};
