var characters = [{
    class: ".ironMan",
    score: 0,
    name: "Iron Man",
    text: "ironman",
    sound: "assets/media/sounds/stark.mp3",
    type: "hero"
}, {
    class: ".captainAmerica",
    score: 0,
    name: "Captain America",
    text: "captainAmerica",
    sound: "assets/media/sounds/cap.mp3",
    type: "hero"
}, {
    class: ".thor",
    score: 0,
    name: "Thor",
    text: "",
    sound: "",
    type: "hero"
}, {
    class: ".captainMarvel",
    score: 0,
    name: "Captain Marvel",
    text: "",
    sound: "",
    type: "hero"
}, {
    class: ".blackPanther",
    score: 0,
    name: "Black Panther",
    text: "",
    sound: "",
    type: "hero"
}, {
    class: ".spiderman",
    score: 0,
    name: "Spiderman",
    text: "",
    sound: "",
    type: "hero"
}, {
    class: ".scarlettWitch",
    score: 0,
    name: "Scarlett Witch",
    text: "",
    sound: "",
    type: "hero"
}, {
    class: ".drStrange",
    score: 0,
    name: "Dr Strange",
    text: "",
    sound: "",
    type: "hero"
}, {
    class: ".thanos",
    score: 0,
    name: "Thanos",
    text: "thanos",
    sound: "assets/media/sounds/thanos.mp3",
    type: "villain"
}, {
    class: ".loki",
    score: 0,
    name: "Loki",
    text: "loki",
    sound: "assets/media/sounds/loki.mp3",
    type: "villain"
}, {
    class: ".killmonger",
    score: 0,
    name: "Killmonger",
    text: "",
    sound: "",
    type: "villain"
}, {
    class: ".corvusGlaive",
    score: 0,
    name: "Corvus Glaive",
    text: "",
    sound: "",
    type: "villain"
}, {
    class: ".ego",
    score: 0,
    name: "Ego",
    text: "",
    sound: "",
    type: "villain"
}, {
    class: ".dormammu",
    score: 0,
    name: "Dormammu",
    sound: "",
    score: 0,
    type: "villain"
}, {
    class: ".nebula",
    score: 0,
    name: "Nebula",
    text: "",
    sound: "",
    type: "villain"
}, {
    class: ".ebonyMaw",
    score: 0,
    name: "Ebony Maw",
    text: "",
    sound: "",
    type: "villain"
}];
var highest = 0;
var second = 0;
var firstChoice, secondChoice = null;
var path = window.location.pathname;
var page = path.split("/").pop();
var audioUrl;

/* ----- Play  section ----- */

// General quiz function
$(document).ready(function() {

    // Function to hide the answered questions and show the following question
    $(".questions").find(".btn").click(function() {
        var audio = new Audio("assets/media/sounds/MouseClick.mp3");
        /* https://www.w3schools.com/tags/av_prop_volume.asp */
        audio.volume = 0.4;
        audio.play();

        $(this).parent().parent().css("display", "none");
        $(".explanation").css("display", "none");
        $(this).parent().parent().next().css("display", "block");
    });

    // Function to add scores to each variable
    // value 1 is counted double
    $('.btn').click(function() {
        count($(this).attr("data-value1"));
        count($(this).attr("data-value1"));
        count($(this).attr("data-value2"));
    });

    // Function to compare the scores and open window
    $(".question6").find(".btn").click(function() {
        setTimeout(determineWinner(), 100);
        setTimeout(storeResultsAndSwitchPage(), 100);
    });
});

// Counts the data values set in the attributes of the buttons
function count(a) {
    for (var i in characters) {
        if (a == characters[i].class) {
            if (a != ".thanos") {
                characters[i].score++;

                // Thanos overules all given answers, cause no good deeds will balance this out
            } else if (a == ".thanos") {
                characters[i].score += 100;
            }
        }
    }
};

/* https://stackoverflow.com/questions/34817776/sessionstorage-and-json-objects */
// For loop to find the outcome with the highest score
function determineWinner() {
    for (var i in characters) {
        if (characters[i].score > highest) {

            // Set the last highest score as second score
            if (highest != 0) {
                second = highest;
                window.sessionStorage.second = window.sessionStorage.winner;
            }

            // Define the highest score
            highest = characters[i].score;
            firstChoice = characters[i].class;
            window.sessionStorage.winner = JSON.stringify(characters[i]);

            // Define the first second score
        } else if (window.sessionStorage.second == undefined) {
            window.sessionStorage.second = JSON.stringify(characters[i]);
        }
    }
};

// Sets winner class in sessionStorage and separates heroes and winners (for div hunting)
function storeResultsAndSwitchPage() {
    sessionStorage.setItem(1, firstChoice);
    window.location.href = "result.html";
};

/* ----- Result section ----- */

// Shows the winner result, data is set in switchToWinner
$("a[href$='result.html']").ready(function() {
    // This if statement prevents the sound from being played with the play-again button
    if (page == "result.html") {
        var winner = JSON.parse(window.sessionStorage.winner);
        var second = JSON.parse(window.sessionStorage.second);

        getCharacterDiv(winner);
        playWinnerAudio(winner);
        appendResultText(winner, second);
    }

    // Needed to fill the modal info from the character card
    $(document).ready(function() {
        translate();
    });
});

//Get the winner div from other pages
function getCharacterDiv(winner) {
    if (winner.type == "hero") {
        $("#result").load("heroes.html " + winner.class);
    }
    if (winner.type == "villain") {
        $("#result").load("villains.html " + winner.class);
    }
};

// Plays audio file from winner
function playWinnerAudio(winner) {
    var audio = new Audio(winner.sound);
    var promise = audio.play();

    // Catching autoplay block from browser
    if (promise !== undefined) {
        promise.then(_ => {
            // Autoplay started!
        }).catch(error => {
            // Autoplay was prevented.
        });
    }
};

// Adds or inserts text and titles on result card
function appendResultText(winner, second) {
    $(".first_class").append(winner.name);
    $(".second_class").append(second.name);
    $(".text_class").attr("data-translate", winner.text);
};

/* ----- Play again section ----- */

// Play again button
$(document).ready(function() {
    $(".play-again-btn").click(function() {
        sessionStorage.setItem("play_again", "true");
        window.location.href = "play.html";
    });
});

// Play again, directly go to first question
$(document).ready(function() {
    if (page === "play.html" && sessionStorage.getItem("again") === "true") {
        $(".explanation").css("display", "none");
        $(".question_start").css("display", "none");
        $(".question1").css("display", "block");
    }
});

/*  https://www.w3schools.com/jquery/sel_attribute_end_value.asp 
    https://developer.mozilla.org/nl/docs/Web/API/Window/sessionStorage */
// This clears the sessionStorage when play is used in the menu.
$("a[href$='play.html']").click(function() {
    var n = sessionStorage.length;
    while (n--) {
        sessionStorage.removeItem(sessionStorage.key(n));
    }
});