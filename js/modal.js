
let myJS = document.querySelectorAll('[data-modal]');

let modal = document.querySelector('.modalBox')
let menuSmartphone = document.querySelector('.shazam')


console.log(myJS);

for (let i = 0 ; i < myJS.length; i++) {
  myJS[i].addEventListener('click', (e) => {

    e.stopPropagation();

    console.log('on boucle '+i);

  //définie l'action entrprit sur le bouton
  let target = e.target;
  let action = target.getAttribute("data-modal")

  switch(action){
       
    case ('openModal'):
      console.log('onOuvre');
      modal.style.display ='block';
    break;


    case ('closeModal'):
      console.log('onFerme');
      e.preventDefault();
      modal.style.display = "none";
    break;
    
    case ('submit'):
      console.log('onTestLaValidation');
      e.preventDefault();
      formValidate();
    break;

    case ('responsiveMenu'):
      console.log('Shazam');
      menuSmartphone.classList.toggle("shazam--responsive")
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
  if (document.querySelectorAll("span.error__message").length > 0) {
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
