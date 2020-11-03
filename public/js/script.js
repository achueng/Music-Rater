$( document ).ready(function() {

    // If user not logged in
    $(".sign-in-btn").show();
    $(".username").hide();
    // Else (user is logged in)
    // $(".sign-in-btn").hide();
    // $(".username").show();
    
    //on click stuff!! do ajax call to send stuff from form to the backend!!! to that /search route!!

    $(".search-btn").on("submit", function(event) {
        event.preventDefault();
        let userSearch = $(".search-input").val().trim();
        let zipSearch = $(".zip-code").val().trim();
        $.ajax("/api/route", {
            type: GET,
            data: data
        }).then(function() {
            //.then(data)  of ajax call has all the spotifyResults from the backend route!! /search
        });
    });

});  