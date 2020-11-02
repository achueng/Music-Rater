const express = require("express");

const router = express.Router();

router.get("/", function(req,res){
    let test = {test: "Hello World!"};
    res.render("index", test);
})

module.exports = router;