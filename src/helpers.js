const db = require('./db'); // Assuming you have a db.js file that exports your database connection


function getUserById(id, callback) {
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
        callback(err, row);
    });
}

module.exports = {getUserById}
  