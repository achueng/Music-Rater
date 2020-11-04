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
        let zipSearch = $(".zip-code").val().trim();
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
        }).then(function(res) {
            //.then(data)  of ajax call has all the spotifyResults from the backend route!! /search
            console.log(res);
            // search by song
            // let song = $("<div>").text(res.Song);
            // $("#song-info").html(song);

            // search by artist
            // let artist = $("<div>").text(res.name);
            // $("#song-info").html(artist);

            // search by album
            // let album = $("<div>").text(res.albumName);
            // $("#song-info").html(album);

            // location.reload();
        });
    });

});  