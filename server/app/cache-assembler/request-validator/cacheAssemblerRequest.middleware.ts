import { body } from "express-validator";

export const cacheAssemblerRequestValidator = () => {
  return [
    body('q').default('vineeth').notEmpty().withMessage('search query is required'),
    body('type').default('users').notEmpty().withMessage('search type is required'),
    body('sort').optional().notEmpty().withMessage('sort cannot be empty'),
    body('order').optional().notEmpty().withMessage('order cannot be empty'),
  ]
}