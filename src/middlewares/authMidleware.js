const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: "el token es requerido" });

  jwt.verify(token, SECRET_KEY, (error, user) => {
    if (error) return res.status(403).json({ error: "el token es inválido o ha expirado" });
    
    req.user = user;
    next();
  });
}

module.exports = authMiddleware;
