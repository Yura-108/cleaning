const express = require('express');
const pool = require('../config/db');
const router = express.Router();


// **GET**: Получить все услуги
router.get('/services', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// **POST**: Добавить новую услугу
router.post('/services', async (req, res) => {
  const { name, image_url, price } = req.body;
  console.log(req.body);

  // Валидация входных данных
  if (!name || !price) {
    return res.status(400).json({ message: 'Поле name и price обязательны' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO services (name, image_url, price) VALUES ($1, $2, $3) RETURNING *',
      [name, image_url, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Ошибка добавления услуги:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;