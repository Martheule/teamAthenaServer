export const paginationMiddleware = (req, res, next) => {
  const {
    page = parseInt(req.query.page) || 1,
    limit = parseInt(req.query.limit) || 10,
  } = req.query;

  const offset = (page - 1) * limit;

  res.pagination = { page, limit, offset };

  next();
};
