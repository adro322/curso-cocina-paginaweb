    function cambiarColorbtn(elemento) {
      elemento.style.transition = "transform 0.2s ease, background-color 0.7s, color 0.7s";
      elemento.style.backgroundColor = "#a6abd2";
      elemento.textContent = "¡Empieza hoy!";
      elemento.style.color="black";
      elemento.style.transform = "scale(1.17)"; // agranda un 10%

    } 

    function restaurarColorbtn(elemento) {
      elemento.style.transition = "transform 0.2s ease, background-color 0.7s, color 0.7s";
      elemento.style.backgroundColor = "#151a40";
      elemento.textContent = "Pasa el cursor aquí";
      elemento.style.color="aliceblue";
      elemento.style.transform = "scale(1)"; // regresa al tamaño original
    }
