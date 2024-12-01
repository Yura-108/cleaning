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
    const { name, phone, email } = req.body;
    try {
        const result = await pool.query('INSERT INTO client (name, phone, email) VALUES ($1, $2, $3) RETURNING *', [name, phone, email]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}