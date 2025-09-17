
// Script para manejar el menú hamburguesa
const hamburguer = document.querySelector("#hamburguer");
const enlaces = document.querySelector("#menu");

hamburguer.addEventListener("click", () => {
enlaces.classList.toggle("show");
});
