const express = require("express");
const router = express.Router();
const {adddoc, getAll, comment, getById} = require("../controllers/doc");

router.post("/adddoc", adddoc);
router.post("/getdocs", getAll);
router.post("/docbyid", getById);
router.put("/comment", comment);

module.exports = router;