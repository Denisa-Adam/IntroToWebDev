var contactForm = document.forms["contact"];
var name = document.getElementById("name");
var email = document.getElementById("email");
var submit = document.getElementById("submit")





function resetView() {
    contactForm.className = "needs-validation";
    name.focus();
}

function validate() {

    contactForm.className = "needs-validation";

    if (!contactForm.checkValidity()) {
        contactForm.className = "was-validated";   
        return false;    
    }
    

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}