let respuesta = confirm("¡Academie te recomienda iniciar sesión o registrarte para guardar tus cursos favoritos!" +
" ¿Estás seguro de continuar?");
if (respuesta) {
    alert("Continuando a la pagina de cursos...");
}   else {
    alert("Redirigiendo a la página de inicio de sesión...");
    // Redirigir a la página de inicio de sesión
    window.location.href = "acceder.html";
}

// Script para manejar la apertura y cierre de modales
  const filas = document.querySelectorAll(".fila-modal");
  const botonesCerrar = document.querySelectorAll("#btn-cerrar-modal");

  filas.forEach(fila => {
    fila.addEventListener("click", () => {
      const idModal = fila.dataset.modal;
      const modal = document.getElementById(idModal);
      if (modal) {
        modal.showModal();
        document.body.style.overflow = "hidden"; // Evita el scroll de fondo
      }
    });
  });

  botonesCerrar.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const dialog = e.target.closest("dialog");
      dialog.close();
      document.body.style.overflow = ""; // Restaura el scroll
    });
  });


// Script para el carrusel de cursos
const grid = document.querySelector('.grid-container');
const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');

const totalCards = grid.children.length;
const visibleCards = 3;
const step = 345;
let scrollIndex = 0;

// Solo aplica desplazamiento si es pantalla grande
function updateTransform() {
    if (window.innerWidth > 1140) {
        grid.style.transform = `translateX(-${scrollIndex * step}px)`;
    } else {
        grid.style.transform = 'none'; // Elimina transform en pantallas pequeñas
    }
}

next.addEventListener('click', () => {
    if (window.innerWidth <= 1140) return; // No hace nada si es móvil

    scrollIndex++;
    if (scrollIndex > totalCards - visibleCards) {
        scrollIndex = 0; //vuelve al inicio
    }
    updateTransform();
});

prev.addEventListener('click', () => {
    if (window.innerWidth <= 1140) return;

    scrollIndex--;
    if (scrollIndex < 0) {
        scrollIndex = totalCards - visibleCards; // va al final
    }
    updateTransform();
});

// Para asegurar que se reinicia cuando se cambia de tamaño de pantalla
window.addEventListener('resize', updateTransform);
updateTransform(); // Llamar al cargar

