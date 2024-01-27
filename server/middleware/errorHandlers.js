const createHttpError = require('http-errors');
const { ValidationError, BaseError } = require('sequelize');

module.exports.dbErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    const errors = err.errors.map(e => ({ status: 422, title: e.message }));
    return res.status(422).send(errors);
  }

  if (err instanceof BaseError) {
    next(createHttpError(500, 'Database Error'));
  }
  
  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  const status = err.status || 500;
  const message = err.message || 'Server error';

  return res.status(status).send({ errors: [{ status, title: message }] });
};
