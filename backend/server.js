const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const joi = require("joi");

const app = express();
app.use(cors());
app.use(express.json());

const Port = process.env.PORT || 3001;

const db = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "12345678",
  database: "foodapp",
});

// Root route
app.get("/", (req, res) => {
  res.send(`Hello, from ${Port}`);
});

// Database route
app.get("/database", (req, res) => {
  const mysql = "SELECT * FROM Customers";

  db.query(mysql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database query failed");
    }
    res.json(results); // send query rows
  });
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
