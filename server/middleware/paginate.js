module.exports.paginatePets = (req, res, next) => {
  const { page = 1, results = 8 } = req.query;

  delete req.query.page;
  delete req.query.results;

  req.pagination = {
    limit: Number(results),
    offset: (page - 1) * results,
  };

  console.log('pagination', req);

  next();
};
