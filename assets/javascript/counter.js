var captainAmerika = { name: "captainAmerika", score: 0 };
var ironMan = { name: "ironMan", score: 0 };
var loki = { name: "loki", score: 0 };
var thanos = { name: "thanos", score: 0 };
var outcomes = [captainAmerika, ironMan, loki, thanos];
var highest = 0;
var firstChoice = null;


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
        setTimeout(winner(), 100);
        setTimeout(switchToWinner(), 100);
    });
});

// Counts the data values set in the attributes of the buttons
function count(a) {
    for (var i in outcomes) {
        if (a == outcomes[i].name) {
            if (a != "thanos") {
                outcomes[i].score++;

                // Thanos overules all given answers, cause no good deeds will balance this out
            } else if (a == "thanos") {
                outcomes[i].score += 100;
            }
        }
    }
}

// For loop to find the outcome with the highest score
function winner() {
    for (var i in outcomes) {
        if (outcomes[i].score > highest) {
            highest = outcomes[i].score;
            firstChoice = outcomes[i].name;
        }
    }
}

// Shows the winner result, class is set in switchToWinner
$(document).ready(function() {
    $(sessionStorage.getItem(1)).css("display", "contents");
});


// Sets winner class in sessionStorage
function switchToWinner() {
    switch (firstChoice) {
        case "captainAmerika":
            sessionStorage.setItem(1, '.captain_america');
            break;

        case "ironMan":
            sessionStorage.setItem(1, '.iron_man');
            break;

        case "loki":
            sessionStorage.setItem(1, '.loki');
            break;

        case "thanos":
            sessionStorage.setItem(1, '.thanos');
            break;
    }
    window.location.href = "result.html";
}

// Plays sound for result winner on result page
$(document).ready(function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();


    if (page == 'result.html') {

        switch (sessionStorage.getItem(1)) {
            case ".captain_america":
                var audio = new Audio('assets/media/sounds/cap.mp3');
                audio.play();
                break;

            case ".iron_man":
                var audio = new Audio('assets/media/sounds/stark.mp3');
                audio.play();
                break;

            case ".loki":
                var audio = new Audio('assets/media/sounds/loki.mp3');
                audio.play();
                break;

            case ".thanos":
                var audio = new Audio('assets/media/sounds/thanos.mp3');
                audio.play();
                break;
        }
    }
});

// Play again button
$(document).ready(function() {
    $(".play-again-btn").click(function() {
        sessionStorage.setItem(2, "play_again");
        window.location.href = "play.html";
    });
});

// Play again, directly go to first question
$(document).ready(function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page === "play.html" && sessionStorage.getItem(2) === "play_again") {
        $(".explanation").css("display", "none");
        $(".question_start").css("display", "none");
        $(".question1").css("display", "block");
    }
});

/*  https://www.w3schools.com/jquery/sel_attribute_end_value.asp 
    https://developer.mozilla.org/nl/docs/Web/API/Window/sessionStorage 
    This clears the sessionStorage when play is used in the menu. */
$("a[href$='play.html']").click(function() {
    sessionStorage.removeItem(2);
});