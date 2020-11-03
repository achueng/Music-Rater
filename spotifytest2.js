
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
});
spotifyApi.setAccessToken('BQCOvmPwRYOYl1ObD5rUFvn5H9mszBlFXUoIvDww0roUJgez--WYASIK4CS-KHsDhIng4i8dZeXfVlUNHl1u5NkZ2rJ2w8HxC94d1MCJzejX1_bpD5O9GSfEY3RismrJNBaHMBZ8YmJw');

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

module.exports = {
    albumList: albumList
}
