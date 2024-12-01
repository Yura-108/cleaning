const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../config/db'); // Подключение к PostgreSQL
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, phone, email, password } = req.body;

  try {
    // Проверка, существует ли клиент
    const existingClient = await pool.query('SELECT * FROM client WHERE email = $1', [email]);
    if (existingClient.rows.length > 0) {
      return res.status(400).json({ error: 'Пользователь с таким email уже существует' });
    }

    // Хэширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Добавление клиента в базу
    const newClient = await pool.query(
      'INSERT INTO client (name, phone, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, phone, email, hashedPassword]
    );

    res.status(201).json({ message: 'Клиент зарегистрирован', client: newClient.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;

const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Проверка существования клиента
    const client = await pool.query('SELECT * FROM client WHERE email = $1', [email]);
    if (client.rows.length === 0) {
      return res.status(400).json({ error: 'Неверный email или пароль' });
    }

    // Проверка пароля
    const isMatch = await bcrypt.compare(password, client.rows[0].password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Неверный email или пароль' });
    }

    // Генерация токена
    const token = jwt.sign({ id: client.rows[0].id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ message: 'Логин успешен', token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;
