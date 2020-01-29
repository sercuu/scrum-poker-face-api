const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.routes');

const app = express();
// .env
const dotenv = require('dotenv');
dotenv.config();
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

//Parsing Request Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middelewate
app.use((req, res, next) => {
  console.log(`${req.path} urline ${req.method} istek atılıyor...`);
  next();
});

// Router
app.use('/user', userRouter);

//DB Connection
mongoose.connect(config.database.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!!..');
});

// listener
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});

module.exports = app;
