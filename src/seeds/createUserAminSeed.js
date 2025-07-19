const db = require("../db");

const adminUser = {
  name: "admin",
  email: "admin@spsgroup.com.br",
  type: "admin",
  password: "1234"
};

const sql = 'INSERT INTO users (name, email, type, password) VALUES (?, ?, ?, ?)';

db.run(sql, [adminUser.name, adminUser.email, adminUser.type, adminUser.password], function(error) {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }
  console.log("Usuario admin creado correctamente.");
  process.exit(0);
});