// Declarations
const adEl = document.querySelector('.ad');
const h1El = document.querySelector('h1');
const commandEl = document.querySelector(".command");
const instructionEl = document.querySelector('.instruction');
const cpcScreenEl = document.querySelector('.cpc-screen');
const playEl = document.querySelector('.play');

// Functions
function handleKeyUp(event) {
   if (event.key !== "Enter") {
      return commandEl.textContent += event.key;
   }

   if (commandEl.textContent === 'codepen') {
      adEl.classList.add('back80');
      h1El.classList.add('back80');
      instructionEl.textContent = 'Yeah !!!';
      playEl.style.display = 'grid';
      return commandEl.textContent = "Welcome Back to the 1980's !!!";
   }

   cpcScreenEl.classList.add('error');
   adEl.classList.add('error');
   instructionEl.textContent = 'ERROR !!!';

   setTimeout(() => {
      cpcScreenEl.classList.remove('error');
      adEl.classList.remove('error');
      instructionEl.textContent = 'Try again !!!';
      commandEl.textContent = ""
   }, 500);
   return (commandEl.textContent = "ERROR");
}

// Event Handler
document.onkeyup = handleKeyUp;