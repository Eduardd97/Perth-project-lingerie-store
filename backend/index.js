require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000; // Установите порт по умолчанию

// Подключение к MongoDB
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

// Middleware
app.use(cors()); // Разрешить запросы с других доменов
app.use(express.json()); // Для обработки JSON в теле запроса

// Подключение к MongoDB
client.connect()
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(e => console.error('Error connecting to MongoDB Atlas', e));

// Определение маршрутов
app.get('/api/products', async (req, res) => {
  try {
    const database = client.db('lingerie_store');
    const collection = database.collection('products');
    const products = await collection.find({}).toArray();
    res.json(products);
  } catch (e) {
    console.error('Error fetching products', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
