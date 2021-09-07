const name = document.getElementById("name");
const email = document.getElementById("email");
const emailMessage = document.getElementById("message");

// Default set the submit button to grey out
$('#contact-form').attr("disabled", true);

$('.form').bind('keyup', function() { 
        var nameLength = name.value.length;
        var emailLength = email.value.length;
        var emailMessageLength = emailMessage.value.length;
        if (nameLength > 0 && emailLength > 0 && emailMessageLength > 0) {
            // When all three fields are filled, set the button to be clickable
            $('#contact-form').attr("disabled", false);
        }
        else {
            // Unless all three fields are filled out, the submit button is still greyed out
            $('#contact-form').attr("disabled", true);
        }
    } 
);

function send_message() {
    console.log(name.value, email.value, emailMessage.value);
    emailjs.send("contact_service","contact_form",{
        issue_number: Math.random() * 100000 | 0,
        message: emailMessage.value,
        user_name: name.value,
        user_email: email.value
        }).then(function() {
            console.log('SUCCESS!');
            alert("Message sent successfully!");
        }, function(error) {
            console.log('FAILED...', error);
        });
}