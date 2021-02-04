function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// regex Email
const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;

// regex birthdate
// Bien que le formulaire présente la date au format dd/mm/yyyy
// La valeur retourné ce présente au format yyyy-mm-dd
const regexBirthDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/i;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// close button
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.addEventListener("click", closeModal);

//execution de verification du formulaire à la validation

document.forms["reserve"].addEventListener("submit", function (e) {
    
  validate();

  console.log(document.querySelectorAll("small.error__message").length);
  if (document.querySelectorAll("small.error__message").length > 0) {
    e.preventDefault();
  } else {
    e.preventDefault();
    //closeModal();
      //confirmSubmit();
      // Requête ajax, ne pas utilisez les données du script de validation 
      // pour des raisons de sécutité.


 
    let el = document.getElementById('reserve')
    console.log(el);
/*
    el.innerHTML = '<h1>Merci ! Votre réservation a été reçue</h1>';

*/
    el.innerHTML= '<h1>Merci ! Votre réservation a été reçue</h1>'
                     

console.log(el.innerHTML);
/*
let el = document.getElementById('body')
    
el.innerHTML = '<h1>Merci ! Votre réservation a été reçue</h1>';
*/



  }
});

//execution de verification du formulaire durant la saisie


document.forms["reserve"].addEventListener("input", function (e) {
    
    validate();



});
