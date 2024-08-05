

export const notFound = (req, res, next) => {
  
  const error = new Error(`Not Found ${req.originalUrl}`)
  res.status(404)
  next(error);
}

export const errorMiddleware = (err, req, res, next) => {

  const statusCode = err.statusCode || 500
  err.message = err.message || "internal server error"

  res.status(statusCode)
  res.json({
    status: "fail",
    message: err.message,
    stack: err.stack
  })
}