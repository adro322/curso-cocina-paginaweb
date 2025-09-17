// LOCAL STORAGE = Es un espacio en el navegador donde puedes guardar datos que persisten aunque recargues o cambies de página, mientras el usuario no borre el caché.

// Verificamos si ya saludamos antes
if (!localStorage.getItem("yaSaludo")) {
    alert("¡Bienvenido Cocinero!"); 
    let nombre = prompt("¿Cuál es tu nombre?"); 

    if (nombre && nombre.trim()/*elimina espacios en blanco al inicio y al final.*/ !== "") { 
        nombre = nombre.trim(); // guarda el nombre limpio (sin espacios) en la variable nombre. 
        
        const contenedor = document.getElementById("hero");
        const tituloPrincipal = contenedor.querySelector("h1");
        tituloPrincipal.classList.add("no-padding");

        const nuevoParrafo = document.createElement("h1");
        nuevoParrafo.innerHTML = `¡Hola ${nombre}!`;
        nuevoParrafo.classList.add("no-padding");
        contenedor.insertBefore(nuevoParrafo, tituloPrincipal);

        // Guardamos los datos
        localStorage.setItem("yaSaludo", "true");
        localStorage.setItem("nombreUsuario", nombre);
    }
} else {
    // Si ya saludamos, cargamos el nombre guardado
    const nombre = localStorage.getItem("nombreUsuario");

    if (nombre) {
        const contenedor = document.getElementById("hero");
        const tituloPrincipal = contenedor.querySelector("h1");
        tituloPrincipal.classList.add("no-padding");

        const nuevoParrafo = document.createElement("h1");
        nuevoParrafo.innerHTML = `¡Hola ${nombre}!`;
        nuevoParrafo.classList.add("no-padding");
        contenedor.insertBefore(nuevoParrafo, tituloPrincipal);
    }
}

function mostrarInformacion(boton, url) {
    const carta = boton.closest(".carta");
    const informacion = carta.querySelector("p");

    if (!informacion.classList.contains("mostrar")) {
        informacion.classList.add("mostrar");
        boton.textContent = "Ir al curso";
    } else {
        window.location.href = url;
    }
}





function mostrarReseñas() {
        const wrapper = document.querySelector(".wrapper");
        const flechita = document.getElementById("flechita");
        const flecha = document.getElementById("flecha-svg");

        if (wrapper.style.display === "none" || wrapper.style.display === "") { //si el estilo display es none o no está definido
        // Mostrar el contenedor de reseñas
            wrapper.style.display = "block";
            flecha.classList.add("girada");
        } else { 
            wrapper.style.display = "none";
            flecha.classList.remove("girada");
        }
    }