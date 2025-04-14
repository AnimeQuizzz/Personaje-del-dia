// Datos simulados por ahora
const personajeDelDia = {
  nombre: "mono",
  imagen: "imagenes/mono.png", // Imagen local del personaje
  pistas: ["tiene lentes", "panadero", "Ama el platano"]
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guess-form");
  const input = document.getElementById("guess");
  const result = document.getElementById("result");
  const image = document.getElementById("character-image");

  // Cargar imagen
  image.src = personajeDelDia.imagen;

  // Mostrar una pista inicial
  const pistasElemento = document.createElement("p");
  pistasElemento.textContent = "Pistas: " + personajeDelDia.pistas.join(", ");
  document.querySelector(".card").appendChild(pistasElemento);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const intento = input.value.trim().toLowerCase();
    const respuesta = personajeDelDia.nombre.toLowerCase();

    if (intento === respuesta) {
      result.textContent = `🎉 ¡Correcto! Es ${personajeDelDia.nombre}!`;
      result.style.color = "green";
    } else {
      result.textContent = "❌ Incorrecto. Inténtalo de nuevo.";
      result.style.color = "red";
    }

    // Limpiar el campo de entrada después de cada intento
    input.value = "";
    input.focus();
  });
});
