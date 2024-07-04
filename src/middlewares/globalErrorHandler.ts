import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  return res.status(500).json({
    success: false,
    message: err?.message,
    error: err,
  });
};

export default globalErrorHandler;
