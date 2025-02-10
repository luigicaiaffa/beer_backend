import mysql2 from "mysql2";

const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

connection.connect((err) => {
  if (err) throw err;
});

export { connection };
