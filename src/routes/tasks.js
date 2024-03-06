import express  from "express";
import tasks from "../controllers/tasks.js";
const router = express.Router()

router.get('/',tasks.getAllTasks);
router.post('/',tasks.createTask);
router.get('/:id',tasks.getTask)
router.patch('/:id',tasks.updateTask)
router.delete('/:id',tasks.deleteTask);

export default router
