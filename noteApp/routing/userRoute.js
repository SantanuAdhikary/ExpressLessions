const {Router} = require("express");
const { register, login } = require("../controller/userController");

const upload = require("../config/multer");

const router = Router();

router.post("/register",upload.single("photo"), register)
router.post("/login",login)

module.exports = router;