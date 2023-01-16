const express = require("express");

const { attributes } = require("../constants")


const router = express.Router();

router.get("/attributes", (req, res, next) => {
    res
    .json(attributes)
    .send();
});


module.exports = router;