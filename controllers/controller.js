const express = require("express");

const router = express.Router();

const spotifyHelper = require('../spotifytest.js')

const song = require("../models/song");

const album = require("../models/album");

const artist = require("../models/artist");

router.get("/", function(req,res){
    res.render("index", {})
})

router.get("/topMusic", function(req, res) {
    res.render("topMusic", {});
})

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

router.post("/api/likedAlbums", async function(req, res) {

})

router.post("/api/likedSongs", async function(req, res) {
    
})

router.post("/api/likedArtists", async function(req, res) {
    
})
module.exports = router;


