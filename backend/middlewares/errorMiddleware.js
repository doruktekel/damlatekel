const errorMiddleware = (err, req, res, next) => {
  let statusCode = res.statusCode || 500;
  let errorMessage = err.message || "Internal Error";

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    errorMessage = "Resource not found   jdsfkjdfksjsdkfsklflk";
  }

  if (err.name === "ValidationError") {
    statusCode = 400;
    errorMessage = err.message;
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    errorMessage,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

export default errorMiddleware;
