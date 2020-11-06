// const express = require("express");

// const router = express.Router();

// const song = require("../models/song");

// const album = require("../models/album");

// const artist = require("../models/artist");

// router.post("/api/likedAlbums", async function(req, res) {
//     album.create(["album", "artist"], [req.body.album, req.body.artist], function (result) {
//         res.json({ id: result.insertId});
//     })
// })

// router.post("/api/likedSongs", async function(req, res) {
//     console.log("test", req.body);
//     song.create(["song", "artist", "album"], [req.body.song, req.body.artist, req.body.album], function (result) {
//         res.json({ id: result.insertId});
//         // console.log("testing", result);
//     })
    
    
// })

// router.post("/api/likedArtists", async function(req, res) {
//     artist.create(["artist"], [req.body.artist], function (result) {
//         res.json({ id: result.insertId});
//     })
    
// })
// router.get("/topSongs", function(req, res) {
//     song.all(function(data) {
//       var hbsObject = {
//         topSongs: data
//       };
//       console.log(hbsObject);
//       res.render("topSongs", hbsObject);
//     });

//   });
//   router.get("/topAlbums", function(req, res) {
//     album.all(function(data) {
//       var hbsObject = {
//         topAlbums: data
//       };
//       console.log(hbsObject);
//       res.render("topAlbums", hbsObject);
//     });

//   });
//   router.get("/topArtists", function(req, res) {
//     artist.all(function(data) {
//       var hbsObject = {
//         topArtists: data
//       };
//       console.log(hbsObject);
//       res.render("topArtists", hbsObject);
//     });
//   });
// // router.get("/api/likedSongs", function (req, res){
// //     console.log(res);
// // })


// module.exports = router;