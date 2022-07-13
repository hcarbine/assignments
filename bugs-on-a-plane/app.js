const form = form.getElementByID("airline-form");
var submit = form.getElementByID(submit);
var query = form.querySelector;

function formAlert(){
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = {};
    if (form.elements['vegan'].checked) {
        diet.push(form.getElementById('vegan').value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(form.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(form.getElementById('paleo').value);
    }
alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}
submit.addEventListener("click", formAlert);
