const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'database.sqlite'), (err) => {
  if (err) return console.error('Error al conectar con la base de datos', err.message);
  console.log('Conectado a la base de datos SQLite');
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      type TEXT NOT NULL,
      password TEXT NOT NULL
    )
  `);
});

module.exports = db;
