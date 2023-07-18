const express = require('express');
const router = express.Router();
const userControl = require('../Controller/User_Control');

router.get("/", userControl.check);
router.get("/all_user", userControl.getAllUser);
router.post('/create_newUser', userControl.createNewUser)
router.get("/getuserbyid/:id", userControl.findUserById);
router.put("/updateuserbyid/:id", userControl.updateUserById);
router.get("/userbyname/:name", userControl.findUserDataByName);
router.put("/deletebyid/:id", userControl.DeleteUserById);

module.exports = router;
