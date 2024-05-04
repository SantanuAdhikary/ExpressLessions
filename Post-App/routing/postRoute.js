
const {Router} = require("express");
const { createPost, allPosts, updatePost, deletePost } = require("../controller/postController");

const router = Router();


router.post("/posts",createPost)
router.get("/posts",allPosts)
router.get("/posts/:id",allPosts)
router.patch("/posts/:id",updatePost)
router.delete("/posts/:id",deletePost)



module.exports = router;