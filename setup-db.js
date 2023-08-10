const fs = require('fs');
require('dotenv').config();

const sql = fs.readFileSync('setup.sql').toString();
console.log(sql)
const db = require('./db');

db.query(sql)
    .then(data => console.log('Set-up complete'))
    .catch(error => console.log(error));