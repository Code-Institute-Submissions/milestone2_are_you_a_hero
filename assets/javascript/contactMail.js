/* Email API EmailJS */
function sendMail(contactForm) {

    /* variables from EmailJS account */
    var service_id = "gmail";
    var template_id = "marvel_fansite";

    try {
        emailjs.send(service_id, template_id, {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "message": contactForm.message.value
        });
        $("#myModal").modal("hide");
        $("#name, #email, #message").val("");

        alert("Thank you for your message!");
        return true;

    } catch (error) {
        $("#myModal").modal("hide");
        $("#name, #email, #message").val("");
        alert("Something went wrong. Please try again later.");

        return false;
    }
}