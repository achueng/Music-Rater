
const spot = require('node-spotify-api');

let spotify = new spot({
      id: 'a7f4e4b98cd0428ca5dc5d7f37d8d907',
      secret: 'ec6e6272897042828a1ec5ab8cf4140e',
    });

function spotifySongSearch(songName) {
    if (!songName) {
        songname = 'Slow Mover';
    }
    // using songName
    spotify.search({
        type: 'track',
        query: songName,
        limit: 3
    }, function (err, data) {
        if (err) {
            console.log(`Error occurred: ${err}`);
            return;
        }
        let songInfo = data.tracks.items;
        console.log(songInfo)
        // Artist Name
        console.log(`Artist(s): ${songInfo[0].artists[0].name}`);
        // Song Name
        console.log(`Song: ${songInfo[0].name}`);
        // Album Name
        console.log(`Album: ${songInfo[0].album.name}`);
        // Preview Link
        console.log(`Preview Link: ${songInfo[0].preview_url}`);

        return data.tracks
    });
}
function spotifyAlbumSearch(albumName) {
    console.log(albumName)
    if (!albumName) {
        albumName = 'Bang Bang';
    }
    // using songName
    spotify.search({
        type: 'album',
        query: albumName,
        limit: 3
    }, function (err, data) {
        if (err) {
            console.log(`Error occurred: ${err}`);
            return;
        }
        console.log(data.albums.items)
        // let songInfo = data.tracks.items;
        // console.log(songInfo)
        // // Artist Name
        // console.log(`Artist(s): ${songInfo[0].artists[0].name}`);
        // // Song Name
        // console.log(`Song: ${songInfo[0].name}`);
        // // Album Name
        // console.log(`Album: ${songInfo[0].album.name}`);
        // // Preview Link
        // console.log(`Preview Link: ${songInfo[0].preview_url}`);
    });
    }
    function spotifyArtistSearch(artistName) {
        console.log(artistName)
        if (!artistName) {
            artistName = "DMA's";
        }
        // using songName
        spotify.search({
            type: 'artist',
            query: artistName,
            limit: 3
        }, function (err, data) {
            if (err) {
                console.log(`Error occurred: ${err}`);
                return;
            }
            console.log(data.artists.items)
            // let songInfo = data.tracks.items;
            // console.log(songInfo)
            // // Artist Name
            // console.log(`Artist(s): ${songInfo[0].artists[0].name}`);
            // // Song Name
            // console.log(`Song: ${songInfo[0].name}`);
            // // Album Name
            // console.log(`Album: ${songInfo[0].album.name}`);
            // // Preview Link
            // console.log(`Preview Link: ${songInfo[0].preview_url}`);
        });
        }
    // spotifySongSearch("Take it easy");
    

    module.exports = {
        spotifySongSearch: spotifySongSearch
    }