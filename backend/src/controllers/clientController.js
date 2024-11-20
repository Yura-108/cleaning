const pool = require('../config/db');

exports.getClient = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM client');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

exports.createClient = async (req, res) => {
    const { first_name, last_name } = req.body;
    try {
        const result = await pool.query('INSERT INTO client (first_name, last_name) VALUES ($1, $2) RETURNING *', [first_name, last_name]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}