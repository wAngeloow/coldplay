//Infinite scroll loop (albums)
const container = document.querySelector('.album-container');
container.innerHTML += container.innerHTML;

//Update copyright year
const yearSpan = document.getElementById('current-year');
yearSpan.textContent = new Date().getFullYear();