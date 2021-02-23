
const formID = "reserve";
const thisFormCondition = {

    'first' : {
      'cond' : {       
          'min-length' : 2       
      }
    },
    'last' : {
      'cond' : {       
          'min-length' : 2       
      }
    },
    'email' : {
      'cond' : {       
          'regex' : regexEmail       
      }
    },
    'birthDate' : {
      'cond' : {       
         0 :{
           'regex' : regexBirthDate,
           'operator' : '&&'
         },
         1:{
           'cond' : 18,
           'operator' : '&&'          
         },
         2:{
          'cond' : 100          
        }      
      }
    },
    


};




 // On récupère les champs de type text
 let inputsText = document.forms[formID].querySelectorAll(
  '.text-control, input[name="location"], input[name="cgv"]'
);


console.log(inputsText);
// On stocke la longueur du tableau dans une variable pour ne pas la 
// redemander à chaque tour de boucle.
for (let i = 0 , inputLength = inputsText.length ; i < inputLength; i++) {

  inputsText[i].addEventListener('input', (e) => {

 // Paramètre qui permettre de lever une exception
  // pour schinter la boucler dès qu'elle trouve un bouton radio "checked"
  let checkRadio = false;
  
    const el = inputsText[i]
    const suffix = el.getAttribute('name')

    switch (suffix) {
      case "first":
      case "last":
        //Longueur minimal de 2 caractère et value de type "string"
        if (el.value.length <= 2 && !el.value.match(/^[a-zA-Z]+$/)) {
          showMessage(
            suffix,
            "Veullez saisir plus de 2 caractères alphabétiques"
          );
          inputChange(false, suffix);
        } else if (el.value.length >= 2 && el.value.match(/^[a-zA-Z]+$/)) {       
          showMessage(suffix, "");
          inputChange(true, suffix);
        }

        break; 


      case "email":
        if (!el.value.match(regexEmail)) {
          showMessage(suffix, "Email invalide");
          inputChange(false, suffix);
        } else {
          showMessage(suffix, "");
          inputChange(true, suffix);
        }

        break;

      case "birthdate":
        if (!el.value.match(regexBirthDate)) {
          showMessage(suffix, "Date invalide");
          inputChange(false, suffix);
        } else if (el.value.match(regexBirthDate)) {

          let yearBirth = el.value.split('-')[0];

          // Controle secondaire pour n'autoriser l'inscription
          // que les personnes ce trouvant dans un age limite

          if (checkAge(yearBirth, 18, 100) === true) {
            showMessage(suffix, "");
            inputChange(false, suffix);
          } else {
            showMessage(
              suffix,
              "Vous n'avez pas l'age requis pour vous inscrire (min:18ans / max:100ans)"
            );
            inputChange(false, suffix);

            break;
          }

          showMessage(suffix, "");
          inputChange(true, suffix);
        }

        //verfiier que la personne inscrite à bien + de 18 ans et moins de 100 ans

        break;

        case "quantity":
          if (el.value !== "" && el.value >= 0 && el.value <= 99) {
            showMessage(suffix, "");
            inputChange(true, suffix);
          } else {
            showMessage(suffix, "Nombre invalide");
            inputChange(false, suffix);
          }

          break;

        //Contrôle des boutons radio

        case "location":
          if (checkRadio === false) {
            if (el.checked === true) {
              showMessage(suffix, "");
              checkRadio = true;
              inputChange(true, suffix);
            } else {
              showMessage(suffix, "Veuillez choisir une ville");
              inputChange(false, suffix);
            }
        }

          break;
        
        //Contrôle de la checkbox CGV

        case "cgv":
          if (el.checked === true) {
            showMessage(suffix, "");
            inputChange(true, suffix);
          } else {
            showMessage(suffix, "Veuillez valider les conditions d'utilisation");
            inputChange(false, suffix);
          }

          break;
    }

   
  
  });
};

const controlInputText = (name,cond) =>{

console.log('on check les input text');

}