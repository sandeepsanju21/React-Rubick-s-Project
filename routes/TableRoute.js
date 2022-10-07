const { Router } = require("express");

const { getToDo,add } = require("../Controllers/TableController");

const router = Router();

router.get("/get-todo", getToDo);
router.post("/save-todo", add);

module.exports=router;