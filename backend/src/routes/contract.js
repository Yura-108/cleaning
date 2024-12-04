const express = require('express');
const pool = require('../config/db'); // Подключение к PostgreSQL
const router = express.Router();

router.get('/contract', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM contract');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Ошибка получения данных:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});


router.post('/contract', async (req, res) => {
    const { client_id, premise_id, cleaner_id, service_id} = req.body;

    // Валидация входных данных
    if (!client_id && !premise_id && !cleaner_id && !service_id) {
        return res.status(400).json({ message: 'Вы не ввели все данные!' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO contract (client_id, premise_id, cleaner_id, service_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [client_id, premise_id, cleaner_id, service_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Ошибка добавления работника:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

module.exports = router;