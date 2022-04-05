const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { startApp } = require('./databaseSetup');
const ourLogger = require('./logger');

const testRouter = require('./components/test');
const usersRouter = require('./routes/users');
const categoryRouter = require('./routes/categories');
const eventsRouter = require('./routes/events');
const accountRouter = require('./routes/account');
const unitofmeasurings = require('./routes/unitofmeasurings.js');
const adminContactsRoutes = require('./routes/contactAdmin');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(ourLogger());

app.use('/api/UnitOfMeasuring', unitofmeasurings);
app.use('/api/test', testRouter);
app.use('/api/users', usersRouter);
app.use('/api/Category', categoryRouter);
app.use('/api/events', eventsRouter);
app.use('/api/account', accountRouter);
app.use('/api/ContactAdmin', adminContactsRoutes);

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, _, res, __) => {
  const { status = 500, message = 'Internal Server Error' } = err;

  res.status(status).json(message);
});

startApp(app);
