const express = require('express');
const pool = require('../config/db'); // Подключение к PostgreSQL
const router = express.Router();

router.get('/premises', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM premise');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});


router.post('/premises', async (req, res) => {
  const { client_id, type, address, square_meters, cleaning_schedule } = req.body;

  // Валидация входных данных
  if (!client_id && !type && !address && !square_meters && !cleaning_schedule) {
    return res.status(400).json({ message: 'Вы не ввели все данные!' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO premise (client_id, type, address, square_meters, cleaning_schedule) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [client_id, type, address, square_meters, cleaning_schedule]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Ошибка добавления помещения:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;