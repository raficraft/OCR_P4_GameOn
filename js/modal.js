
let myJS = document.querySelectorAll('[data-modal]');

let modal = document.querySelector('.modalBox')
let menuSmartphone = document.querySelector('.shazam')




for (let i = 0 ; i < myJS.length; i++) {
  myJS[i].addEventListener('click', (e) => {

    e.stopPropagation();

  

  //définie l'action entrprit sur le bouton
  let target = e.target;
  let action = target.getAttribute("data-modal")

  switch(action){
       
    case ('openModal'):
      modal.style.display ='block';
    break;


    case ('closeModal'):
      e.preventDefault();
      modal.style.display = "none";
    break;
    
    case ('submit'):
      e.preventDefault();
      formValidate();
    break;

    case ('responsiveMenu'):
      menuSmartphone.classList.toggle("shazam--responsive")
    break;

  }
  
  })
}




