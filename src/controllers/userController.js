// const db = require("./db");
const db = require("../db");
const { getUserById } = require("../helpers");

function createOrUpdateUser(req, res) {
    const userId = req.query?.user_id;
    const { name, email, type, password } = req.body;

    if(!userId){
        const sql = `INSERT INTO users (name, email, type, password) VALUES (?, ?, ?, ?)`;
      
        db.run(sql, [name, email, type, password], function (error) {
          if (error) return res.status(500).json({ error: error.message });
          
          getUserById(this.lastID, (err, user) => {
            if (err) return res.status(500).json({ error: err.message });
            return res.status(200).json(user);
          });
    
        });
    }else{
        const sql = 'UPDATE users SET name = ?, email = ?, type = ?, password = ? WHERE id = ?';
        db.run(sql, [name, email, type, password, userId], function (err) {
          if (err) return res.status(500).json({ error: err.message });
    
          getUserById(userId, (err, user) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json(user);
          });
        });
    }
}

function getUsers(req, res) {
    const userId = req.query?.user_id;
    if(userId){
        getUserById(userId, (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
            return res.json(user);
        });
    }else{
        db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    }
}

function deleteUser(req, res) {
    const userId = req.query?.user_id;
    if (!userId) {
        return res.status(400).json({ error: "user_id is required" });
    }

    db.run('DELETE FROM users WHERE id = ?', [userId], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    });
}

module.exports = {
    createOrUpdateUser,
    getUsers,
    deleteUser
}