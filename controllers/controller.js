const express = require("express");

const router = express.Router();

const spotifyHelper = require('../spotifytest.js')

router.get("/", function(req,res){
    let test = {test: "Hello World!"};
    res.render("index", test);
})





router.get("/search", function(req,res){

    console.log('we hit the route!!', req.body)
   var spotifyResults = spotifyHelper.spotifySongSearch(req.body.band)
   res.json(spotifyResults)

})

module.exports = router;