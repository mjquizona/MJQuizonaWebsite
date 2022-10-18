// navbar-section
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
};

navLogo.addEventListener("click", mobileMenu);
menu.addEventListener("click", mobileMenu);

//Copy Clipboard
let eCopy = document.getElementById("emailCopy");
let nCopy = document.getElementById("numCopy");

function copyEmail() {
  navigator.clipboard.writeText(eCopy.textContent);
}

function copyNum() {
  navigator.clipboard.writeText(nCopy.textContent);
}

//google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbx9jddIIeu9IjKsG1Xe16y4yyifvz8L06djZLNkmgaT_T7mJ-txop3lBgiC6lBZa7fNkg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msgSent")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(_response => { 
        msg.innerHTML = 
        ` <span>Message sent succesfully</span> <img src="images/icons8-check-mark-button.png" alt=""> `
        setTimeout(function() {
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  