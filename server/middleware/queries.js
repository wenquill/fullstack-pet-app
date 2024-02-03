module.exports.prepareGetQueries = (req, res, next) => {
  const queries = req.query;
  const whereConditions = {};

  console.log('queries', queries);

  Object.keys(queries)
    .filter(
      key =>
        key !== 'offset' &&
        key !== 'page' &&
        key !== 'results' &&
        key !== 'order'
    )
    .forEach(key => {
      if (queries[key]) {
        whereConditions[key] = queries[key];
      }
    });

  req.whereConditions = whereConditions;
  next();
};
