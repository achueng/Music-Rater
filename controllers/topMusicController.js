const express = require("express");

const router = express.Router();

const song = require("../models/song");

const album = require("../models/album");

const artist = require("../models/artist");

router.post("/api/likedAlbums", async function(req, res) {
    album.create(["album", "artist"], [req.body.album, req.body.artist], function (result) {
        res.json({ id: result.insertId});
    })
})

router.post("/api/likedSongs", async function(req, res) {
    song.create(["song", "artist", "album"], [req.body.song, req.body.artist, req.body.album], function (result) {
        res.json({ id: result.insertId});
    })
    
})

router.post("/api/likedArtists", async function(req, res) {
    artist.create(["artist"], [req.body.artist], function (result) {
        res.json({ id: result.insertId});
    })
    
})

module.exports = router;