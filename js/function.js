/**
   * Change le style du champs cible si une erreur est detecter
   * @inputTarget {string} name de l'input correspondant
   * @message {string}
   */
  
  
  function showMessage(inputTarget, message) {
    document.getElementById("error__message--" + inputTarget).innerText = message;
  }
  
  /**
   * Change le style du champs cible si une erreur est detecter
   * @state {boolean}
   * @inputTarget {string} name de l'input correspondant
   */
  inputChange = (state,inputTarget) => {
    
  
    target = document.querySelector('input[name="'+inputTarget+'"]');
    targetBox = document.getElementById('error__message--'+inputTarget);
  
    if (state === false) {
      target.classList.toggle('input__error')
      targetBox.classList.toggle('error__message')
      console.log('add');
    } else if (state === true) {
      target.classList.toggle('input__error')
      targetBox.classList.toggle('error__message')
      console.log('remove');
    }
  
  };
  
  /**
   * @yearOfBirth {number}  year format yyyy
   * @lowLimit {number}
   * @HightLimit {number}
   */
  
  function checkAge(yearOfBirth, lowLimit, hightLimit) {
    //current year
    let thisYear = new Date().getFullYear();
  
    let gap = thisYear - yearOfBirth;
  
    if (gap >= lowLimit && gap <= hightLimit) {
      return true;
    }
  }


formSuccess = ()=>{
       // Si il n'y à plus de message d'erreur on considère que le 
    // formulaire est valide
    if (document.querySelectorAll("span.error__message").length > 0) {
     
      console.log('invalid');
    } else {
  
      //Pour les besoins de la démo on schinte le comportement par défaut
     
      console.log('valid');
    
 
      let el = document.getElementById("reserve");
      el.innerHTML = `<span class="close" data-modal="closeModal"></span>
                      <div class="submitSuccess">
                        <header>
                          <h1>Merci, Votre réservation a bien été enregistrée</h1> 
                        </header>
                        <button class="btn" value="close" data-modal="closeModal"/>close</button>
                      </div>`;
  
      // Requête ajax, ne pas utilisez les données du script de validation
      // pour des raisons de sécutité.
    }
}
  

  