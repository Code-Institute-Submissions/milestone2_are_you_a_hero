/* Email API EmailJS */
function sendMail(contactForm) {
    /* variables from EmailJS account */
    var service_id = "gmail";
    var template_id = "marvel_fansite";
    var current_lang = sessionStorage.getItem("language");
    var trans;

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

    if (name.length < 5) {
        $("#name").popover({ title: 'Error', content: "Name should be at least 5 characters" });
        /* solution from https://stackoverflow.com/questions/40470513/bootstrap-popover-displayed-on-second-click */
        $("#name").popover("show");
        dispose("#name");

        return false;

    } else if ($.trim(name) == '') {
        $("#name").popover({ title: 'Error', content: "Name only contains whitespaces, please fill in your name" });
        $("#name").popover("show");
        dispose("#name");

        return false;

    } else if (reg.test(name) == true) {
        $("#name").popover({ title: 'Error', content: "Name only contains number, please fill in your name" });
        $("#name").popover("show");
        dispose("#name");

        return false;

    } else if (message.length < 5) {
        $("#message").popover({ title: 'Error', content: "Message should be at least 10 characters" });
        $("#message").popover("show");
        dispose("#message");

        return false;

    } else if ($.trim(message) == '') {
        $("#message").popover({ title: 'Error', content: "Message only contains whitespaces" });
        $("#message").popover("show");
        dispose("#message");

        return false;
    }
};

function dispose(id) {
    setTimeout(function() {
        $(id).popover('dispose');
    }, 3000);
};