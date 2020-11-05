
const spot = require('node-spotify-api');
const Spotify = require('node-spotify-api/src');
const spotifyHelper = require('./spotifytest2')

let spotify = new spot({
      id: 'a7f4e4b98cd0428ca5dc5d7f37d8d907',
      secret: 'ec6e6272897042828a1ec5ab8cf4140e',
    });

 // made async to be able to retrieve obj searchedSong   
// "Slow Mover is now the default song"
async function spotifySongSearch(songName = "Slow Mover") {
    let data = await spotify.search({
        type: 'track',
        query: songName,
        limit: 3
    });

    let songInfo = data.tracks.items;
    let searchedSong = {
        Song: songInfo[0].name,
        Artist: songInfo[0].artists[0].name,
        Album: songInfo[0].album.name,
        Preview: songInfo[0].preview_url,
    }
   return searchedSong;
}

async function spotifyAlbumSearch( albumName = "Hills End"){
    let data = await spotify.search({
        type: 'album',
        query: albumName,
        limit: 3
    })
    let albumInfo = data.albums.items[0]
    let albumTracks = await spotifyHelper.albumTracks(albumInfo.id)
    let searchedAlbum = {

        albumName: albumInfo.name,
        albumArtist: albumInfo.artists[0].name,
        releaseDate: albumInfo.release_date,
        albumImage: albumInfo.images[0].url,
        albumTracks: albumTracks

    }
    // console.log(searchedAlbum)
    return searchedAlbum;
}
async function spotifyArtistSearch( artistName = "DMA's"){
    let data = await spotify.search({
        type: 'artist',
        query: artistName,
        limit: 3
    })
    let artistInfo = data.artists.items[0]
    let artistsAlbums = await spotifyHelper.albumList(artistInfo.id)
    // console.log(artistInfo)
    let searchedArtist = {
        name: artistInfo.name,
        genre: artistInfo.genres,
        artistsAlbums: artistsAlbums,
        artistImage: artistInfo.images[0].url
    }
    // console.log(searchedArtist)
    return searchedArtist;
}

    module.exports = {
        spotifySongSearch: spotifySongSearch,
        spotifyAlbumSearch: spotifyAlbumSearch,
        spotifyArtistSearch: spotifyArtistSearch
    }
spotifyArtistSearch();