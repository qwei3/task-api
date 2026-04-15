import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask } from '../middleware/validateTask.js';
import { validateTasksQuery } from '../middleware/validateTasksQuery.js';

const router = express.Router();

router.get('/', validateTasksQuery, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
