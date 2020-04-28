const express = require('express');
var multer = require('multer');
const connectDB = require('./config/db');

//start express
const app = express();

//connect DB
connectDB();

//Init Middleware && now we can accept data 
app.use(express.json({ extended: false }))

app.get('/', (rec, res) => res.json({ msg: 'Welcome to Prague' }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/excursion', require('./routes/excursion'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));