const { Router } = require("express");
const authcontroller = require("../controller/auth-controller");
const {authMiddleware} =require('../middleware/jwt')
const router = Router();

const {registerSchema,loginSchema,validate} = require("../middleware/validate");
const{registerLimiter,loginLimiter}=require('../config/rate-limit');

router.post('/register',registerLimiter,validate(registerSchema),authcontroller.register);
router.post('/login',loginLimiter,validate(loginSchema),authcontroller.login);
router.put('/update-password',authMiddleware,authcontroller.updatePassword)
router.post('/logOut',authcontroller.logOut);

module.exports = router;