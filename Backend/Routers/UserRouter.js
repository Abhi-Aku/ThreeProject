const express = require("express");
const userController=require ('../Controller/UserController')

const router = express.Router();

router.post("/get", userController.PostData);
router.get("/get", userController.GetData);
router.put("/get/:id", userController.UpdateData);
router.delete("/get/:id", userController.DeleteData);

module.exports = router;