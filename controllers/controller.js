const express = require("express");

const router = express.Router();

const spotifyHelper = require('../spotifytest.js')

const song = require("../models/song");

const album = require("../models/album");

const artist = require("../models/artist");

router.get("/", function(req,res){
    res.render("index", {})
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
    album.create(["album", "artist"], [req.body.album, req.body.artist], function (result) {
        res.json({ id: result.insertId});
    })
})

router.post("/api/likedSongs", async function(req, res) {
    console.log("test", req.body);
    song.create(["song", "artist", "album"], [req.body.song, req.body.artist, req.body.album], function (result) {
        res.json({ id: result.insertId});
        // console.log("testing", result);
    })
    
    
})

router.post("/api/likedArtists", async function(req, res) {
    artist.create(["artist"], [req.body.artist], function (result) {
        res.json({ id: result.insertId});
    })
    
})
router.get("/topSongs", function(req, res) {
    song.all(function(data) {
      var hbsObject = {
        topSongs: data
      };
      console.log(hbsObject);
      res.render("topSongs", hbsObject);
    });

  });
  router.get("/topAlbums", function(req, res) {
    album.all(function(data) {
      var hbsObject = {
        topAlbums: data
      };
      console.log(hbsObject);
      res.render("topAlbums", hbsObject);
    });

  });
  router.get("/topArtists", function(req, res) {
    artist.all(function(data) {
      var hbsObject = {
        topArtists: data
      };
      console.log(hbsObject);
      res.render("topArtists", hbsObject);
    });
  });

module.exports = routes;


