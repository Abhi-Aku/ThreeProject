const express = require("express");
const userController=require ('../Controller/UserController')

const router = express.Router();

router.post("/register", userController.PostData);
router.get("/get", userController.GetData);

module.exports = router;