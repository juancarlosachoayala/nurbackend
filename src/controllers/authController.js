const db = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;


function login(req, res) {
    console.log("Login request received");
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1`;
    db.get(sql, [email, password], (error, user) => {
        if (error) return res.status(500).json({ error: error.message });
        if (!user) return res.status(401).json({ error: "Credenciales inválidas" });

        // Generar token JWT
        const token = jwt.sign({ id: user.id, type: user.type }, SECRET_KEY, { expiresIn: '8h' });

        return res.json({ token });
    });
}

module.exports = {
    login
};