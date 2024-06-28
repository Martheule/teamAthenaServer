export const errorHandler = (err, req, res, next) => {
  console.error("\x1b[31m%s\x1b[0m", err);
  res
    .status(err.statusCode || 500)
    .json(
      err.statusCode && err.message
        ? { error: err.message }
        : "Ops!!! Something Went Wrong"
    );
};
