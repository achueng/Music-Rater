
const spot = require('node-spotify-api');

let spotify = new spot({
      id: 'a7f4e4b98cd0428ca5dc5d7f37d8d907',
      secret: 'ec6e6272897042828a1ec5ab8cf4140e',
    });

    function spotifySearch(query) {
        if (!query) {
            query = 'Return of the Mack';
        }
        // using songName
        spotify.search({
            type: 'track',
            query: query,
            limit: 3
        }, function (err, data) {
            if (err) {
                console.log(`Error occurred: ${err}`);
                return;
            }
            let songInfo = data.tracks.items;
            // Artist Name
            console.log(`Artist(s): ${songInfo[0].artists[0].name}`);
            // Song Name
            console.log(`Song: ${songInfo[0].name}`);
            // Album Name
            console.log(`Album: ${songInfo[0].album.name}`);
            // Preview Link
            console.log(`Preview Link: ${songInfo[0].preview_url}`);
        });
    }
    spotifySearch("Take it easy");
    spotifySearch();