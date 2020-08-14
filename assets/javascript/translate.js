/* Got the idea and parts of the code from this question on StackOverflow
https://stackoverflow.com/questions/32008125/using-javascript-to-change-website-language */

function language(languageSelected) {
    // Remember the language choice throughout the site
    sessionStorage.setItem("language", languageSelected);

    translate();
}

function translate() {
    var current_lang = sessionStorage.getItem("language");

    // Translation from JSON file
    $.getJSON("assets/language/translation.json", (json) => {

        $("[data-translate]").each(function() {
            var key = $(this).data("translate");

            // Check if there is already a language selected
            if (
                sessionStorage.getItem("language") === "undefined" ||
                sessionStorage.getItem("language") === null
            ) {
                sessionStorage.setItem("language", "en");
                current_lang = "en";
            }

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
    });
}
$(document).ready(function() {
    translate();
});