/*
	Name: Denisa Adam
	Date Created: 18.03.2021
	Most recent revision: 18.03.2021
*/


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
    
    return false;
}