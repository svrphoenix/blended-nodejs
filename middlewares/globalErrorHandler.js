

const globalErrorHandler = (err, req, res, _) => {
    const { statusCode=500, message = "Something went wrong, please try again later" } = err;
    res.status(statusCode).json({ message });
}

module.exports = globalErrorHandler;