const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const servicesRoutes = require('./routes/services');
const cleanersRoutes = require('./routes/cleaners');
const premiseRoutes = require('./routes/premise');
const contractRoutes = require('./routes/contract');
const cors = require('cors');



app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', servicesRoutes);
app.use('/api', cleanersRoutes);
app.use('/api', premiseRoutes);
app.use('/api', contractRoutes);


app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
