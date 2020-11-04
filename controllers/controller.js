const express = require("express");

const router = express.Router();

const spotifyHelper = require('../spotifytest.js')

router.get("/", function(req,res){
    let test = {test: "Hello World!"};
    res.render("index", test);
})

//have to make async to wait for spotify to load results
router.post("/api/songsearch", async function(req,res){
    console.log('we hit the route!!', req.body);
    //"step up the morphine is test song to be replaced with user input"
   let searchedSong = await spotifyHelper.spotifySongSearch(req.body.song);
   console.log("searchedSong:", searchedSong);
    //render entire obj
//    res.render("searchedSong", searchedSong)
    res.json(searchedSong);

})
router.post("/api/albumsearch", async function(req,res){

    console.log('we hit the route!!', req.body);
    //"step up the morphine is test song to be replaced with user input"
   let searchedAlbum = await spotifyHelper.spotifyAlbumSearch("Hills End");
    //render entire obj
    res.json(searchedAlbum);

})
router.post("/api/artistsearch", async function(req,res){

    console.log('we hit the route!!', req.body);
    //"step up the morphine is test song to be replaced with user input"
   let searchedArtist = await spotifyHelper.spotifyArtistSearch("DMA's");
    //render entire obj
    res.json(searchedArtist);

})
module.exports = router;


