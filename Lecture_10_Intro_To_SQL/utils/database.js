import mysql from 'mysql2'


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root1',
    password: 'root1',
   database: 'airbnb' 
});