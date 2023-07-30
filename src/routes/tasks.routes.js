import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTasks, updateTasks , deleteTasks} from "../controllers/tasks.controllers.js"
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskShema } from "../schemas/task.schema.js";

const router = Router()

router.get("/tasks" ,authRequired , getTasks)
router.get("/tasks/:id",authRequired , getTask)
router.post("/tasks",authRequired, validateSchema(createTaskShema), createTasks)
router.put("/tasks/:id",authRequired , updateTasks)
router.delete("/tasks/:id",authRequired , deleteTasks)

export default router