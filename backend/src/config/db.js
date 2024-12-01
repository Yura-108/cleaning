const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cleaning',
    password: '223344yra',
    port: 5432,
})

module.exports = pool;