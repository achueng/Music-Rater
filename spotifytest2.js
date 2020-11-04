
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
});
spotifyApi.setAccessToken('BQBQeUO6IaVwFm96AGJUq90MfCpFqsSxdgdjKwiFn7Ki4fLewawwRZZMDZNfpe6Im0Ku9-WHS6Y_mg6tnMGCz_fQD3o8lbGyZjRcx8TtOvRtwmYHG4iva-ubM7J8eBcyw0BRrCCc3yvh');

async function albumList(artistID){ 
    spotifyApi.getArtistAlbums(artistID).then(
    
    function(data) {
    
    //   console.log('Artist albums', data.body.items[6].name);
        artistAlbums = data.body.items.map(item => item.name)
        console.log(artistAlbums)
        return artistAlbums
    },
    function(err) {
      console.error(err);
    }
  );
}
async function albumTracks(albumID){
    spotifyApi.getAlbumTracks(albumID)
  .then(function(data) {
      albumTracksList = data.body.items.map(item => item.name)
    console.log(albumTracksList);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}
module.exports = {
    albumList: albumList,
    albumTracks: albumTracks
}
