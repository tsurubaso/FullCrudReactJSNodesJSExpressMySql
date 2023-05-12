const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DBUSERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM student";
  db.query(sqlGet, (err, result) => {
    console.log("error: ", err);
    console.log("result: ", result);
    res.send(result);
  });
});

/*app.get('/', function(req, res){

    const sqlInsert=`INSERT INTO student (Name, Email, Contact) VALUES ("Frank", "Frank@gmail.com","2ddduter")`;

    db.query(sqlInsert,(err,result)=>{
        console.log("error: ", err);
        console.log("result: ", result);
    });})*/

app.listen(process.env.PORT, () => {
  console.log("listening on port 5000");
});
