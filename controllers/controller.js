const express = require("express");

const router = express.Router();

const spotifyHelper = require('../spotifytest.js')

router.get("/", function(req,res){
    let test = {test: "Hello World!"};
    res.render("index", test);
})

//have to make async to wait for spotify to load results
router.get("/songsearch", async function(req,res){

    console.log('we hit the route!!', req.body);
    //"step up the morphine is test song to be replaced with user input"
   let searchedSong = await spotifyHelper.spotifySongSearch("step up the morphine");
    //render entire obj
   res.render("searchedSong", searchedSong)

})
router.get("/api/albumsearch", async function(req,res){

    console.log('we hit the route!!', req.body);
    //"step up the morphine is test song to be replaced with user input"
   let searchedAlbum = await spotifyHelper.spotifyAlbumSearch("Hills End");
    //render entire obj
   res.render("searchedAlbum", searchedAlbum)

})
module.exports = router;


