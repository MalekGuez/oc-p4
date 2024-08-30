function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const confirmationClose = document.querySelectorAll(".success-close");
const successContainer = document.getElementById("success-container");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", () => {
  modalbg.style.display = "none";
});

confirmationClose.forEach(el => {
  el.addEventListener("click", () => {
    successContainer.classList.add('success-hide');
    modalbg.style.display = "none";

    setTimeout(() => {
      window.location.href = "index.html";
    }, "600");
  });
});


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function onFormSubmit(event) {
  const first = document.getElementById('first');
  const last = document.getElementById('last');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const checkboxC = document.getElementById('checkbox1');
  let formHasError = false;
  const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  event.preventDefault();
  // Firstname -------------------------------------------------------
  if(!(first.value != '')) {
    first.classList.add('invalid');
    let firstError = document.getElementById('first-error');
    firstError.innerHTML = "Veuillez remplir le champ du prénom.";
    formHasError = true;
  } else if(!(first.value.length >= 2)) {
    first.classList.add('invalid');
    let firstError = document.getElementById('first-error');
    firstError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    formHasError = true;
  } else {
    first.classList.remove('invalid');
    document.getElementById('first-error').innerHTML = "";
  }
  

  // Lastname -------------------------------------------------------
  if(!(last.value != '')) {
    last.classList.add('invalid');
    let lastError = document.getElementById('last-error');
    lastError.innerHTML = "Veuillez remplir le champ du nom.";
    formHasError = true;
  } else if(!(last.value.length >= 2)) {
    last.classList.add('invalid');
    let lastError = document.getElementById('last-error');
    lastError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    formHasError = true;
  } else {
    last.classList.remove('invalid');
    document.getElementById('last-error').innerHTML = "";
  }
  

  // Email -------------------------------------------------------
  if(!(email.value != '')) {
    email.classList.add('invalid');
    let emailError = document.getElementById('email-error');
    emailError.innerHTML = "Veuillez remplir le champ de l'email.";
    formHasError = true;
  } 
  // Regex qui test si l'email a un bon format
  else if(!emailReg.test(email.value)) {
    email.classList.add('invalid');
    let emailError = document.getElementById('email-error');
    emailError.innerHTML = "Veuillez respecter le format de d'un email.";
    formHasError = true;
  } else {
    email.classList.remove('invalid');
    document.getElementById('email-error').innerHTML = "";
  }


  // Birthdate -------------------------------------------------------
  if(!(birthdate.value != '')) {
    birthdate.classList.add('invalid');
    let birthdateError = document.getElementById('birthdate-error');
    birthdateError.innerHTML = "Vous devez entrer votre date de naissance.";
    formHasError = true;
  } 
  // Si la date de naissance est > date d'aujourd'hui
  else if(new Date(birthdate.value) > new Date()) {
    birthdate.classList.add('invalid');
    let birthdateError = document.getElementById('birthdate-error');
    birthdateError.innerHTML = "La date de naissance est invalide (vous n'êtes pas encore nés).";
    formHasError = true;
  } 
  // Si la personne a plus de 100 ans 
  else if(new Date().getFullYear() - new Date(birthdate.value).getFullYear() > 100) {
    birthdate.classList.add('invalid');
    let birthdateError = document.getElementById('birthdate-error');
    birthdateError.innerHTML = "La date de naissance est invalide (vous êtes un centenaire(?)).";
    formHasError = true;
  }
  else {
    console.log();
    birthdate.classList.remove('invalid');
    document.getElementById('birthdate-error').innerHTML = "";
  }

  
  // Quantity -------------------------------------------------------
  if(!(quantity.value != '')) {
    quantity.classList.add('invalid');
    let quantityError = document.getElementById('quantity-error');
    quantityError.innerHTML = "Vous devez entrer un nombre de tournois.";
    formHasError = true;      
  }
  else if(!(parseInt(quantity.value) != NaN)){
    quantity.classList.add('invalid');
    let quantityError = document.getElementById('quantity-error');
    quantityError.innerHTML = "Veuillez entrer un nombre.";
    formHasError = true;      
  } 
  else {
    quantity.classList.remove('invalid');
    document.getElementById('quantity-error').innerHTML = "";
  }


  // Radio -------------------------------------------------------
  let radioChecked = false;
  let radioButtons = document.querySelectorAll('input[name="location"]');
  radioButtons.forEach(r => {
    if(r.checked) radioChecked = true;
  });
  if(!radioChecked) {
    let radioError = document.getElementById('radio-error');
    radioError.innerHTML = "Vous devez choisir une option.";
    formHasError = true;
  } else document.getElementById('radio-error').innerHTML = "";

  // Checkbox -------------------------------------------------------
  if(!checkboxC.checked) {
    let checkboxError = document.getElementById('checkbox-error');
    checkboxError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    formHasError = true;
  } else document.getElementById('checkbox-error').innerHTML = "";
  if(formHasError) return false;
  successContainer.classList.remove('success-hide');
  return true;
}