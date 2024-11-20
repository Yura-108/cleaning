const { Pool } = require('pg');
require('dotenv').config();

// const pool = new Pool({
//     user: process.env.BD_USER,
//     host: process.env.BD_HOST,
//     database: process.env.BD_NAME,
//     password: process.env.BD_PASSWORD,
//     port: process.env.BD_PORT,
// });
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cleaning',
    password: '223344yra',
    port: 5432,
})

module.exports = pool;