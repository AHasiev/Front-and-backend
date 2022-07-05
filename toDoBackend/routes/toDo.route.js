const { Router } = require("express");
const { toDoController } = require("../controllers/toDo.controller");

const router = Router();

router.get("/toDo", toDoController.getToDo);
router.post("/toDo", toDoController.postTodo);
router.delete("/toDo/:id", toDoController.deleteTodo);
router.patch("/toDo/:id", toDoController.patchTodo);

module.exports = router;
