import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"
import HttpResponse from "../../common/facades/httpResponse"

export interface requestValidationError {
    [key: string]: string
}

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors: requestValidationError[] = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(HttpResponse.HTTP_UNPROCESSABLE_ENTITY).json({
    errors: extractedErrors,
  })
}
