document.getElementById("btnEnviar").addEventListener("click", function () {

    let total = 0;

    // Contar respuestas correctas
    for (let i = 1; i <= 6; i++) {
        let pregunta = document.querySelector(`select[name="p${i}"]`);
        if (pregunta.value === "correcto") {
            total++;
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar contenido anterior

    let imagen = document.createElement("img");
    imagen.style.width = "400px";
    imagen.style.height = "auto";

    
    if (total === 6) {
        imagen.src="./img/microondas.jpg"; 
        resultado.innerHTML = "<h2>¡Excelente! Acertaste las 6 preguntas </h2>";
    } 
    else if (total >= 3) {
        imagen.src = "./img/campana.jpg"; 
        resultado.innerHTML = `<h2>¡Muy bien! Acertaste ${total} preguntas </h2>`;
    } 
    else {
        imagen.src = "./img/perdedor.jpg"; 
        resultado.innerHTML = `<h2>Solo acertaste ${total} preguntas </h2>`;
    }

    resultado.appendChild(imagen);
});