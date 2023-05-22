const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

router.get("/", UserController.getAllUsers);

router.post("/", UserController.createUser);

router.get("/:id", UserController.getUserById);

router.put("/:id", UserController.updateUser);

router.patch("/:id", UserController.patchUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
