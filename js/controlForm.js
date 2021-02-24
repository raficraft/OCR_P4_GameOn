formValidate = () => {

    // On récupère les champs de type text
    let inputsText = document.forms["reserve"].querySelectorAll(
      '.text-control, input[name="location"], input[name="cgv"]'
    );
  
    // Paramètre qui permettre de lever une exception
    // pour schinter la boucler dès qu'elle trouve un bouton radio "checked"
    let checkRadio = false;
  
    inputsText.forEach((el) => {
      // on recupère l'attribut "name", qui servira à cibler  la balise .error_message
      // qui contiendra le message d'erreur.
      // Permet aussi de cibler l'input attribut (name) correspondant
      // pour changer son style.
      let inputName = el.name;
  
      console.log(inputName);
  
      switch (inputName) {
        case "first":
        case "last":
          //Longueur minimal de 2 caractère et value de type "string"
          if (el.value.length <= 2 || !el.value.match(/^[a-zA-Z]+$/)) {
            showMessage(
              inputName,
              "Veullez saisir plus de 2 caractères alphabétiques"
            );
            inputChange(false, inputName);
          } else if (el.value.length >= 2 && el.value.match(/^[a-zA-Z]+$/)) {       
            showMessage(inputName, "");
            inputChange(true, inputName);
          }
  
          break; 
  
  
        case "email":
          if (!el.value.match(regexEmail)) {
            showMessage(inputName, "Email invalide");
            inputChange(false, inputName);
          } else {
            showMessage(inputName, "");
            inputChange(true, inputName);
          }
  
          break;
  
        case "birthdate":
          if (!el.value.match(regexBirthDate)) {
            showMessage(inputName, "Date invalide");
            inputChange(false, inputName);
          } else if (el.value.match(regexBirthDate)) {
  
            let yearBirth = el.value.split('-')[0];
  
            // Controle secondaire pour n'autoriser l'inscription
            // qu'aux personnes ce trouvant dans un âge limite
  
            if (checkAge(yearBirth, 18, 100) === true) {
              showMessage(inputName, "");
              inputChange(false, inputName);
            } else {
              showMessage(
                inputName,
                "Vous n'avez pas l'âge requis pour vous inscrire. (min:18ans / max:100ans)"
              );
              inputChange(false, inputName);
  
              break;
            }
  
            showMessage(inputName, "");
            inputChange(true, inputName);
          }
  
  
          break;
  
          case "quantity":
            if (el.value !== "" && el.value >= 0 && el.value <= 99) {
              showMessage(inputName, "");
              inputChange(true, inputName);
            } else {
              showMessage(inputName, "Nombre invalide");
              inputChange(false, inputName);
            }
  
            break;
  
          //Contrôle des boutons radio
  
          case "location":
            if (checkRadio === false) {
              if (el.checked === true) {
                showMessage(inputName, "");
                checkRadio = true;
                inputChange(true, inputName);
              } else {
                showMessage(inputName, "Veuillez choisir une ville");
                inputChange(false, inputName);
              }
          }
  
            break;
          
          //Contrôle de la checkbox CGV
  
          case "cgv":
            if (el.checked === true) {
              showMessage(inputName, "");
              inputChange(true, inputName);
            } else {
              showMessage(inputName, "Veuillez valider les conditions d'utilisation");
              inputChange(false, inputName);
            }
  
            break;
      }
    });

    formSuccess()
  
    
  };
  