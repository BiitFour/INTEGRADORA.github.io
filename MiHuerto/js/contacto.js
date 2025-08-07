import { ref, push } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { app, db } from "../js/conexion.js";

// Esperamos a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validación rápida
    if (nombre === "" || correo === "" || mensaje === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Enviar a Firebase
    const referencia = ref(db, "contacto"); // "contacto" es como tu tabla
    push(referencia, {
      nombre: nombre,
      correo: correo,
      mensaje: mensaje,
      fecha: new Date().toLocaleString() // Agregamos una fecha opcional
    })
    .then(() => {
      alert("Mensaje enviado correctamente.");
      formulario.reset();
    })
    .catch((error) => {
      console.error("Error al enviar mensaje:", error);
      alert("Ocurrió un error al enviar el mensaje.");
    });
  });
});

