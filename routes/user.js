const express = require("express");
const router = express.Router();
const {adduser, edituser, getById, getAll, upvoteuser} = require("../controllers/user");

router.post("/adduser", adduser);
router.put("/edituser", edituser);
router.put("/upvoteuser", upvoteuser);
router.post("/getuser/:userkey", getById);
router.post("/getalluser", getAll);

module.exports = router;