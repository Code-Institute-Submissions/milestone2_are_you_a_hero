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

    setTimeout(function() {
        $("#submit").popover('dispose');
    }, 3000);

    if (name.length < 5) {
        $("#submit").popover({ title: 'Error', content: "Name is to short, please fill in your name" });
        return false;

    } else if ($.trim(name) == '') {
        $("#submit").popover({ title: 'Error', content: "Name only contains whitespaces, please fill in your name" });

        return false;
    }
    return true;
};