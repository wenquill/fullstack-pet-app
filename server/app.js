const express = require('express');
const cors = require('cors');
const { errorHandlers } = require('./middleware');
const router = require('./routes');
const { STATIC_PATH } = require('./static');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.static(STATIC_PATH));
app.use(express.json());
app.use('/api', router);
app.use(errorHandlers.dbErrorHandler, errorHandlers.errorHandler);

module.exports = app;
