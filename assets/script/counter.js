var captainAmerika = { name: "captainAmerika", score: 0 };
var ironMan = { name: "ironMan", score: 0 };
var loki = { name: "loki", score: 0 };
var thanos = { name: "thanos", score: 0 };
var outcomes = [captainAmerika, ironMan, loki, thanos];
var highest = 0;
var firstChoice = null;


$(document).ready(function() {

    // Used the reactions on the following link for the window.location.href: https://stackoverflow.com/questions/16959476/how-to-go-to-a-url-using-jquery
    // can nog niet gelijk na vraag 1 vanaf een andere pagina, even kijken of ik dat wil
    $(".start-btn").click(function() {
        //sessionStorage.setItem(1, '.question1');
        window.location.href = "play.html";
    });

    // Function to hide the answered questions and show the following question
    $(".questions").find(".btn").click(function() {
        var audio = new Audio("media/sounds/Naamloos.mp3");
        /* https://www.w3schools.com/tags/av_prop_volume.asp */
        audio.volume = 0.4;
        audio.play();
        
        $(this).parent().parent().css("display", "none");
        $(this).parent().parent().next().css("display", "block");
    });

    // Function to add scores to each var
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

function winner() {
    for (var i in outcomes) {
        if (outcomes[i].score > highest) {
            highest = outcomes[i].score;
            firstChoice = outcomes[i].name;
        }
    }
}

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

$(document).ready(function() {
    $(sessionStorage.getItem(1)).css("display", "contents");
});

$(document).ready(function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();


    if (page == 'result.html') {

        switch (sessionStorage.getItem(1)) {
            case ".captain_america":
                var audio = new Audio('media/sounds/cap.mp3');
                audio.play();
                break;

            case ".iron_man":
                var audio = new Audio('media/sounds/stark.mp3');
                audio.play();
                break;

            case ".loki":
                var audio = new Audio('media/sounds/loki.mp3');
                audio.play();
                break;

            case ".thanos":
                var audio = new Audio('media/sounds/thanos.mp3');
                audio.play();
                break;
        }
    }
});