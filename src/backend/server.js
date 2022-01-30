const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.URI;
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established');
});

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.listen(port, () => console.log(`Server running on port ${ port }`));
