
console.log("app.js loaded");

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
require('dotenv').config();
const connectDB = require('./config/db');

const indexRouter = require('./routes/index');
const assignmentsRouter = require('./routes/assignments');

const app = express();
connectDB();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/assignments', assignmentsRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
