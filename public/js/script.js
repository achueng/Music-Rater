
$( document ).ready(function() {

    // If user not logged in
    $(".sign-in-btn").show();
    $(".username").hide();
    // Else (user is logged in)
    // $(".sign-in-btn").hide();
    // $(".username").show();

    //on click stuff!! do ajax call to send stuff from form to the backend!!! to that /search route!!

    $(".user-input").on("submit", function(event) {
        event.preventDefault();
        let musicSearch = $(".search-input").val().trim();
        // let zipSearch = $(".zip-code").val().trim();
        let userSelect = $("#search-opt").val();
        let searchFor;

        switch (userSelect) {
            case "Song": 
                searchFor = "/api/songsearch"
                break;
            case "Artist":
                searchFor = "/api/artistsearch"
                break;
            case "Album":
                searchFor = "/api/albumsearch"
                break;
        }

        // console.log(musicSearch);
        $.ajax(searchFor, {
            type: "POST",
            data: {music: musicSearch}
        }).then(function(data) {
            //.then(data)  of ajax call has all the spotifyResults from the backend route!! /search
            console.log(data);
            
            switch (userSelect) {
                case "Song": 
                    songInfo(data);
                    break;
                case "Artist":
                    artistInfo(data);
                    break;
                case "Album":
                    albumInfo(data);
                    break;
            }
            $("#save-btn-album").on("click", function(event) {
                event.preventDefault();
                var newAlbum = {
                    albumName : $("#album-name").text(),
                    albumArtist : $("#albumArtist").text()
                };
                
                $.ajax("/api/likedAlbums", {
                    type: "POST",
                    data: newAlbum
                }).then(
                    function() {
                        console.log("Successfully Liked");
                    }
                )
            });
    
            $("#save-btn-artist").on("click", function(event) {
                event.preventDefault();
                console.log("Successfully Liked");
                var newArtist = {
                    artist: $("#artist").text(),
                    
                };
                
                $.ajax("/api/likedArtists", {
                    type: "POST",
                    data: newArtist
                }).then(
                    function() {
                        console.log("Successfully Liked");
                    }
                )
            });
    
            $("#save-btn-song").on("click", function(event) {
                event.preventDefault();
                var newSong = {
                    songName : $("#songName").text(),
                    songArtist : $("#songArtist").text(),
                    songAlbum : $("#songAlbum").text()
                };
                
                $.ajax("/api/likedSongs", {
                    type: "POST",
                    data: newSong
                }).then(
                    function() {
                        console.log("Successfully Liked");
                    }
                )
            });
            // location.reload();
        });

         // search by song
         function songInfo(data) {
            let song = `
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title" id = "songName">${data.Song}</h3>
                    <h4>Artist: <span id = "songArtist">${data.Artist}</span></h4>
                    <h4>Album: <span id = "songAlbum">${data.Album}</span></h4>
                    <button class="save-btn btn btn-primary" id = "save-btn-song" value="song">Like Song</button>
                </div>
            </div>
            `;
            $("#song-info").html(song);
        }

        // search by artist
        function artistInfo(data) {
            let discography = data.artistsAlbums.map(element => {
                element = "<li>"+element+"</li>"
                return element
                // console.log(discography)
            })
            let genres = data.genre.join(", ");
            let artist = `
            <div class = "card" id = "testwidth">
            <img class="card-img-top mx-auto" src=${data.artistImage}  alt="Artist Image">
                <div class="card-body">
                    <h3 class="card-title" id ="artist">${data.name}</h3>
                    <h5>Genres:</h5>
                    <p>${genres}</p>
                    <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Discography
                            </button>
                        </h2>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <ol>
                        ${discography.join("")}
                        </ol>
                        </div>
                    </div>
                </div>
                    <button class="save-btn btn btn-primary" id = "save-btn-artist" value="artist">Like Artist</button>
                </div>
            </div>
            `;
            $("#song-info").html(artist);
        }

        // search by album
        function albumInfo(data) {
            let tracks = data.albumTracks.map(element => {
                element = "<li>" + element + "</li>"
                return element;
            });
            // console.log(tracks.join(""));
            let album = `
            <div class = "card">
                <img class="card-img-top" src=${data.albumImage} alt="AlbumCover">
                <div class="card-body">
                    <h3 class="card-title" id= "album-name">${data.albumName}</h3>
                    <h4 id >Artist: <span id="albumArtist"> ${data.albumArtist}</span></h4>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Track List
                                </button>
                            </h2>
                            </div>

                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                            <ol>
                            ${tracks.join("")}
                            </ol>
                            </div>
                        </div>
                    </div>
                    <button class="save-btn btn btn-primary" id = "save-btn-album" value="album">Like Album</button>
                </div>
            </div>
            `;
            $("#song-info").html(album);
        }
        
    
    })

});

      

