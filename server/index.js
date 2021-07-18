const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT ?? 8000;

require('dotenv').config({ path: './.env' });

// Enable Cors Request
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}));

// API Routes
app.use('/api', require('./routes'));

if (process.env.MODE === 'production') {
  app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(
      __dirname, '..', 'client', 'build', 'index.html',
    ));
  });
}

app.listen(port);
console.log(`server running on port ${port}`);
