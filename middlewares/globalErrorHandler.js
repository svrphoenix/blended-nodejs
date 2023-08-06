const globalErrorHandler = (err, req, res, _) => {
  const { statusCode = 500, message = 'Something went wrong, please try again later' } = err;
  if (err.kind === 'ObjectId') {
    res.status(400).json({ message: 'Invalid ObjectId' });
  }
  res.status(statusCode).json({ message });
};

module.exports = globalErrorHandler;
