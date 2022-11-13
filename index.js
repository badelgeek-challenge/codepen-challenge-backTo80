document.onkeyup = handleKeyUp;
const commandEl = document.querySelector(".command");

function handleKeyUp(event) {
   if (event.key !== "Enter") {
      return commandEl.textContent += event.key;
   }

   if (commandEl.textContent === 'codepen') {
      document.querySelector('.ad').classList.add('back80');
      document.querySelector('h1').classList.add('back80');
      document.querySelector('.instruction').textContent = 'Yeah !!!';
      return commandEl.textContent = "Welcome Back to the 1980's !!!";
   }

   document.querySelector('.cpc-screen').classList.add('error');
   document.querySelector('.ad').classList.add('error');
   document.querySelector('.instruction').textContent = 'ERROR !!!';
   setTimeout(() => {
      document.querySelector('.cpc-screen').classList.remove('error');
      document.querySelector('.ad').classList.remove('error');
      document.querySelector('.instruction').textContent = 'Try again !!!';
      commandEl.textContent = ""
   }, 500);
   return (commandEl.textContent = "ERROR");

}
