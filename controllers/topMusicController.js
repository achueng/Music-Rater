const express = require("express");

const router = express.Router();

const song = require("../models/song");

const album = require("../models/album");

const artist = require("../models/artist");

router.post("/api/likedAlbums", async function(req, res) {

})

router.post("/api/likedSongs", async function(req, res) {
    
})

router.post("/api/likedArtists", async function(req, res) {
    
})

module.exports = router;