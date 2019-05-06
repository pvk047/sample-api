const express = require("express")
const router = express.Router();
const { shouldLoggedIn } = require("./middlewares/authCheck");
const jwt = require("./services/jwt")
router.get("/", shouldLoggedIn, (req, res, next) => {
    res.json({
        status: '200',
        data: req.userData
    })
});
module.exports = router;