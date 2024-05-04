const {Router} = require("express");
const { register } = require("../controller/authController");

const upload = require("../config/multer");

const router = Router();

router.post("/register", upload.single("photo") , register)

module.exports = router;