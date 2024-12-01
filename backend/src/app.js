const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const servicesRoutes = require('./routes/services');
const cleanersRoutes = require('./routes/cleaners');
const premiseRoutes = require('./routes/premise');
const cors = require('cors');


// Настройка CORS
app.use(cors({
  origin: 'http://localhost:5173', // Укажите адрес фронтенда
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные методы
  credentials: true, // Если используются куки
}));

// Middleware
app.use(express.json());

// Роуты
app.use('/auth', authRoutes);
app.use('/api', servicesRoutes);
app.use('/api', cleanersRoutes);
app.use('/api', premiseRoutes);

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
