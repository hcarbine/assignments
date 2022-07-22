
    function formAlert(){
    const form = form.getElementById("airline-form")
    const submit = form.getElementById("submit")
    var firstName = form.elements["first-Name"].value;
    var lastName = form.elements["last-Name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(form.getElementById('vegan').value);
    }
    else if (form.elements['gluten'].checked) {
        diet.push(form.getElementById('gluten').value);
    }
    else if (form.elements['paleo'].checked) {
        diet.push(form.getElementById('paleo').value);
    }
    else{
        diet.push("")
    }
    submit.addEventListener("submit", function formAlert(){  
alert("first-Name: " + firstName + "\nlast-Name: " + lastName + "\nage: " + age + "\ngender: " + gender + "\ntravel-location: " + location + "\ndiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})
    }


