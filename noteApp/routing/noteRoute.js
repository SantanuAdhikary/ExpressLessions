
const {Router} = require("express");
const { createNotes, allNotes, singleNote, updateNote, deleteNote} = require("../controller/noteController");

const router = Router();





router.post("/notes",createNotes)
router.get("/notes",allNotes)
router.get("/notes/:id",singleNote)
router.patch("/notes/:id",updateNote)
router.delete("/notes/:id",deleteNote)


module.exports = router;


