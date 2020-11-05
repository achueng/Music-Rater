const express = require("express");

const router = express.Router();

const spotifyHelper = require('../spotifytest.js')

var record = require("../models/model");

//have to make async to wait for spotify to load results
router.post("/api/songsearch", async function(req,res){
    console.log('we hit the route!!', req.body);
    //"step up the morphine is test song to be replaced with user input"
   let searchedSong = await spotifyHelper.spotifySongSearch(req.body.music);
   console.log("searchedSong:", searchedSong);
    //render entire obj
//    res.render("searchedSong", searchedSong)
    res.json(searchedSong);

})
router.post("/api/albumsearch", async function(req,res){

    console.log('we hit the route!!', req.body);
    //"step up the morphine is test song to be replaced with user input"
   let searchedAlbum = await spotifyHelper.spotifyAlbumSearch(req.body.music);
    //render entire obj
    res.json(searchedAlbum);
})
    
router.post("/api/artistsearch", async function(req,res){

    console.log('we hit the route!!', req.body);
    //"step up the morphine is test song to be replaced with user input"
   let searchedArtist = await spotifyHelper.spotifyArtistSearch(req.body.music);
    //render entire obj
    // res.render("searchedArtist", searchedArtist);
    res.json(searchedArtist);

})
module.exports = router;


