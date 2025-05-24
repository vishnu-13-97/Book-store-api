const { Router } = require("express");
const authcontroller = require("../controller/auth-controller");
const {authMiddleware} =require('../middleware/jwt')
const router = Router();


router.post('/register',authcontroller.register);
router.post('/login',authcontroller.login);
router.put('/update-password',authMiddleware,authcontroller.updatePassword)
router.post('/logOut',authcontroller.logOut);

module.exports = router;