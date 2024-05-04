const {Router} = require("express");
const { createFood, allFood, singleFood, updateFood, deleteFood } = require("../controller/foodController");

const router = Router();

router.post('/foods',createFood)
router.get('/foods',allFood)
router.get('/foods/:id',singleFood)
router.patch('/foods/:id',updateFood)
router.delete('/foods/:id',deleteFood)


module.exports = router;