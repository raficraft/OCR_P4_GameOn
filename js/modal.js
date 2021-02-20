


// regex Email
const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;

// regex birthdate
// Bien que le formulaire présente la date au format dd/mm/yyyy
// La valeur retourné ce présente au format yyyy-mm-dd
const regexBirthDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/i;

//execution de verification du formulaire à la validation

//On récupère tous les éléments interactif

let myJS = document.querySelectorAll('[data-modal]');
let modal = document.querySelector('.modalBox')


console.log(myJS);

for (let i = 0 ; i < myJS.length; i++) {
  myJS[i].addEventListener('click', (e) => {

    e.preventDefault();

  //définie l'action entrprit sur le bouton
  let target = e.target;
  console.log(target);
  let action = target.getAttribute("data-modal")
  console.log('click');

  console.log(action);
  switch(action){
    case ('openModal'):
      console.log('onOuvre');
      modal.style.display ='block';
    break;


    case ('closeModal'):
      console.log('onFerme');
      modal.style.display = "none";
    break;
    

  }
  
  })
}








//Ouverture de la boite modal

/*
document.forms["reserve"].addEventListener("submit", function (e) {

  validate();


  // Si il n'y à plus de message d'erreur on considère que le 
  // formulaire est valide
  if (document.querySelectorAll("small.error__message").length > 0) {
    e.preventDefault();
  } else {

    //Pour les besoins de la démo on schinte le comportement par défaut
    e.preventDefault();

    let el = document.getElementById("reserve");
    el.innerHTML = "<h1>Merci ! Votre réservation a été reçue</h1>";

    // Requête ajax, ne pas utilisez les données du script de validation
    // pour des raisons de sécutité.
  }
});

//execution de verification du formulaire durant la saisie
document.forms["reserve"].addEventListener("input", function (e) {
  validate();
});


// On pourrait aussi le faire avec un event "change"
// il n'est pas pertinent de le faire au submit du formulaire 
// pour des raison de sécurité évidente. 
// Et laisser cette event pour une requete Ajax afin de transmettre les données
*/
