// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
    console.log(close);
  modalbg.style.display = "none";
}

function inputStyle(result, inputTarget) {
  if (result === false) {
    // on passe le champs en rouge
  } else if (result === true) {
    // on remets le style normal
  }
}

function showMessage(inputTarget, message) {
  document.getElementById("error__message--" + inputTarget).innerText = message;
}

/**
 * Change le style du champs cible si une erreur est detecter
 * @param {bolean}
 * @param {string} id
 */
inputChange = (state, inputTarget) => {

  target = document.querySelector('input[name="'+inputTarget+'"]');
  targetBox = document.getElementById('error__message--'+inputTarget);

  if (state === false) {
    target.classList.add('input__error')
    targetBox.classList.add('error__message')
  } else if (state === true) {
    target.classList.remove('input__error')
    targetBox.classList.remove('error__message')
  }

};

/**
 * @param {number} yearOfBirth
 * @param {number}
 */

function checkAge(yearOfBirth, lowLimit, hightLimit) {
  //current year
  let thisYear = new Date().getFullYear();

  let gap = thisYear - yearOfBirth;

  if (gap >= lowLimit && gap <= hightLimit) {
    return true;
  }
}

function confirmSubmit() {

    console.log('on affiche la confiramtion');

    let el = document.querySelector('body')
    console.log(el);

    el.innertHTML = '<div class="bground">'+
                        '<div class="content">'+
                            '<span class="close"></span>'+
                                '<div class="modal-body">'+
                                    '<h1>Merci ! Votre réservation a été reçue</h1>'+
                                '</div>'+
                        '</div>'+
                    '</div>';

console.log(el.innerHTML);



}

function hasclass(selector) {
  var className = " " + selector + " ";
  for (var i = 0, l = this.length; i < l; i++) {
    if (
      (" " + this[i].className + " ")
        .replace(/[\n\t\r]/g, " ")
        .indexOf(className) > -1
    ) {
      return true;
    }
  }

  return false;
}
