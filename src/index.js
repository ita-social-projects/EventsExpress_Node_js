const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { startApp } = require('./databaseSetup');
const unitofmeasurings = require('./routes/unitofmeasurings.js');

const testRouter = require('./components/test');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/UnitOfMeasuring', unitofmeasurings);
app.use('/api/test', testRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, _, res, __) => {
  const { status = 500, message = 'Internal Server Error' } = err;

  res.status(status).json(message);
});

startApp(app);
