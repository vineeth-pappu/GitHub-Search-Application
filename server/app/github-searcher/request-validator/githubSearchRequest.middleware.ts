import { body } from "express-validator";

export const githubSearchRequestValidator = () => {
  return [
    body('q').notEmpty().withMessage('search query is required'),
    body('type').notEmpty().withMessage('search type is required'),
    body('sort').optional().notEmpty().withMessage('sort cannot be empty'),
    body('order').optional().notEmpty().withMessage('order cannot be empty'),
  ]
}