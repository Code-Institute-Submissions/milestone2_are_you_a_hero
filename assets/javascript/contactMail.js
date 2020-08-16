var current_lang = sessionStorage.getItem("language");
var trans;

/* Email API EmailJS */
function sendMail(contactForm) {
    /* variables from EmailJS account */
    var service_id = "gmail";
    var template_id = "marvel_fansite";

    try {
        emailjs.send(service_id, template_id, {
            from_name: contactForm.name.value,
            from_email: contactForm.email.value,
            message: contactForm.message.value,
        });
        $("#myModal").modal("hide");
        $("#name, #email, #message").val("");

        $.getJSON("assets/language/translation.json", (json) => {
            trans = json[current_lang]["alert"];
            alert(trans);
        });

        return true;

    } catch (error) {
        $("#myModal").modal("hide");
        $("#name, #email, #message").val("");

        $.getJSON("assets/language/translation.json", (json) => {
            trans = json[current_lang]["alerterror"];
            alert(trans);
        });

        return false;
    }
};

/* Validates name entry and shows popup */
function validateData() {
    var name = $("#name").val();
    var message = $("#message").val();
    /* solution from https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers */
    var reg = /^\d+$/;

    $.getJSON("assets/language/translation.json", (json) => {
        if (name.length < 5) {
            popoverMessage(json, "#name", "shortname");
            return false;

        } else if ($.trim(name) == '') {
            popoverMessage(json, "#name", "spacesname");
            return false;

        } else if (reg.test(name) == true) {
            popoverMessage(json, "#name", "numbersname");
            return false;

        } else if (message.length < 10) {
            popoverMessage(json, "#message", "shortmessage");
            return false;

        } else if ($.trim(message) == '') {
            popoverMessage(json, "#message", "spacesmessage");
            return false;
        }
    });
};

function popoverMessage(json, id, error) {
    trans = json[current_lang][error];

    $(id).popover({ title: 'Error', content: trans });
    /* solution from https://stackoverflow.com/questions/40470513/bootstrap-popover-displayed-on-second-click */
    $(id).popover("show");
    dispose(id);
};

function dispose(id) {
    setTimeout(function() {
        $(id).popover('dispose');
    }, 3000);
};