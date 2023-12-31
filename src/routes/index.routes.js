import { Router } from "express";
import Task from "../models/Task";

import {
  createTask,
  deleteTask,
  editTask,
  renderTask,
  renderTaskEdit,
  updateTask,
} from "../controllers/tasks.controller";
const router = Router();

router.get("/", renderTask);

router.post("/task/add", createTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", updateTask);

export default router;
