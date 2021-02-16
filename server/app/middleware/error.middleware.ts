import HttpException from "../exceptions/httpException";
import { Request, Response, NextFunction } from "express";
import HttpResponse from "../common/facades/httpResponse";

export const errorHandler = (
  error: HttpException,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  const status = error.statusCode || HttpResponse.HTTP_INTERNAL_SERVER_ERROR;
  const message = error.message || HttpResponse.$statusTexts[status];

  response.status(status).send(message);
};
