import { query } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTasksQuery = [
  query('completed')
    .optional()
    .isBoolean()
    .withMessage('completed must be true or false'),

  checkValidationResults,
];