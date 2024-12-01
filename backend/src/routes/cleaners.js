const express = require('express');
const pool = require('../config/db'); // Подключение к PostgreSQL
const router = express.Router();

router.get('/cleaners', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cleaner');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});


router.post('/cleaners', async (req, res) => {
  const { name, phone, email, rating, image_url } = req.body;

  // Валидация входных данных
  if (!name && !phone && !email && !rating) {
    return res.status(400).json({ message: 'Вы не ввели все данные!' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO cleaner (name,  phone, email, rating, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name,  phone, email, rating, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Ошибка добавления работника:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;