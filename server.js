const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//connect to DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/chefs', require('./routes/api/chefs'));
app.use('/api/userauth', require('./routes/api/userauth'));
app.use('/api/foodies', require('./routes/api/foodies'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/shop', require('./routes/api/shop'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/cart', require('./routes/api/cart'));
app.use('/api/order', require('./routes/api/order'));
app.use('/api/dish', require('./routes/api/dish'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
