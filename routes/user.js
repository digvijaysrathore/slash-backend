const express = require("express");
const router = express.Router();
const {adduser, edituser, getById, getAll, upvoteuser, getByEmail} = require("../controllers/user");

router.post("/adduser", adduser);
router.put("/edituser", edituser);
router.put("/upvoteuser", upvoteuser);
router.post("/getuser", getById);
router.post("/getdev", getByEmail);
router.post("/getalluser", getAll);

module.exports = router;