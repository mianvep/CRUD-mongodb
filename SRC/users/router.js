const router = require("express").Router();
const services = require("./services");

router.get("/users", services.getAllUsers);

router.post("/users", services.createUser);

module.exports = router;
