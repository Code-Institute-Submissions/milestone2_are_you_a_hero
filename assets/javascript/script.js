/*  Code from Google
    https://developers.google.com/web/updates/2017/09/autoplay-policy-changes 
*/
$(document).ready(function() {
    var audio = document.querySelector("audio");
    audio.volume = 0.1;

    var promise = audio.play();

    // Catching autoplay block from browser
    if (promise !== undefined) {
        promise
            .then((_) => {
                // Autoplay started!
                $("#play").removeClass("fa-volume-mute");
                $("#play").addClass("fa-volume-up");
            })
            .catch((error) => {
                // Autoplay was prevented.
                // Show a "Play" button so that user can start playback.
                $("#play").addClass("fa-volume-mute");
                $("#play").removeClass("fa-volume-up");
            });
    }
});

// Playing audio manually
function play() {
    var audio = document.querySelector("audio");
    audio.volume = 0.1;

    if (audio.paused) {
        audio.play();
        $("#play").removeClass("fa-volume-mute");
        $("#play").addClass("fa-volume-up");
    } else {
        audio.pause();
        $("#play").addClass("fa-volume-mute");
        $("#play").removeClass("fa-volume-up");
    }
}