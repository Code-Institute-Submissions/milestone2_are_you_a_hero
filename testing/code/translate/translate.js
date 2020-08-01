/* Got the idea and parts of the code from this question on StackOverflow
https://stackoverflow.com/questions/32008125/using-javascript-to-change-website-language */

var langs = ["en", "nl", "de"];
var modal = ["name", "email", "message"];

// Check if there is already a language selected
if (sessionStorage.getItem("language") === 0 || sessionStorage.getItem("language") === null) {
    var current_lang_index = 0;
} else {
    var current_lang_index = sessionStorage.getItem("language");
}

var current_lang = langs[current_lang_index];

document.change_lang = function() {
    current_lang_index = ++current_lang_index % 3;
    current_lang = langs[current_lang_index];
    translate();
}

function translate() {
    $('[data-translate]').each(function() {

        var key = $(this).data("translate");
        var trans;

        // Translation from JSON file
        $.getJSON("translation.json", (json) => {
            const trans = json[current_lang][key];
            $(this).html(trans);

            // Contact modal uses placeholders and no html content
            if (this.id == "name") this.placeholder = trans;
            if (this.id == "email") this.placeholder = trans;
            if (this.id == "message") {
                this.placeholder = trans;

                //Textarea can show content, so clear the performed translation
                $(this).html("");
            }
        });

        // Remember the language choice throughout the site
        sessionStorage.setItem("language", current_lang_index);
    });
}
translate();