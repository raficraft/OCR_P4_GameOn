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
      target.classList.add('input__error')
      targetBox.classList.add('error__message')
      console.log('add');
    } else if (state === true) {
      target.classList.remove('input__error')
      targetBox.classList.remove('error__message')
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
  

  