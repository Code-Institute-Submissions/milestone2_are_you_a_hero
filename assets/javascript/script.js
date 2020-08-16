var path = window.location.pathname;
var page = path.split("/").pop();
/*  Code from Google
    https://developers.google.com/web/updates/2017/09/autoplay-policy-changes 
*/
$(document).ready(function() {
    var audioSession = sessionStorage.getItem("audio");
    var audioOn = sessionStorage.getItem("audioOn");
    var audio = document.querySelector("audio");
    audio.volume = 0.2;

    // Music plays only on index page when first opening the website
    if (page === "index.html" && audioOn == undefined) {
        var promise = audio.play();

        // Catching autoplay block from browser
        if (promise !== undefined) {
            promise.then((_) => {
                // Autoplay started!
                $("#play").removeClass("fa-volume-mute");
                $("#play").addClass("fa-volume-up");
            }).catch((error) => {
                // Autoplay was prevented.
                // Show a "Play" button so that user can start playback.
                $("#play").addClass("fa-volume-mute");
                $("#play").removeClass("fa-volume-up");
            });
        }
    }

    // Volume on result page to the background for interference with winnes dound
    if (page === "result.html") {
        audio.volume = 0.05;
    }

    // When switching to another page the location of the audio is stored
    $(".nav-link").click(function() {
        if (!audio.paused) {
            sessionStorage.setItem("audio", audio.currentTime);
            sessionStorage.setItem("audioOn", 1);
        } else {
            sessionStorage.setItem("audioOn", 0);
        }
    });

    // Update currenttime with the stored timestamp
    if (audioSession != 'undefined' && audioSession != 0) {
        audio.currentTime = audioSession;
    }
    // When music was played on the previos page, play it again
    if (audioOn == 1) {
        playAndIcon();
    }
});

// Playing audio manually
function play() {
    var audio = document.querySelector("audio");
    audio.volume = 0.2;

    if (audio.paused) {
        playAndIcon();

    } else {
        pauseAndIcon();
    }
}

function playAndIcon() {
    audio.play();
    $("#play").removeClass("fa-volume-mute");
    $("#play").addClass("fa-volume-up");
};

function pauseAndIcon() {
    audio.pause();
    $("#play").addClass("fa-volume-mute");
    $("#play").removeClass("fa-volume-up");
    sessionStorage.setItem("audio", audio.currentTime);
};