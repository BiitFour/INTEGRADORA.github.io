const preguntas = [
  {
    texto: "¿Cuál es el clima predominante donde vives?",
    opciones: ["Cálido", "Templado", "Frío", "Húmedo"]
  },
  {
    texto: "¿Vives en casa o departamento?",
    opciones: ["Casa con patio", "Departamento con balcón", "Departamento sin espacio exterior"]
  },
  {
    texto: "¿Tienes mascotas?",
    opciones: ["Sí, perros", "Sí, gatos", "No tengo"]
  },
  {
    texto: "¿Tienes hijos pequeños?",
    opciones: ["Sí", "No"]
  },
  {
    texto: "¿Cuánto tiempo puedes dedicar al cuidado de plantas?",
    opciones: ["Mucho", "Regular", "Muy poco"]
  },
  {
    texto: "¿Qué tipo de plantas prefieres?",
    opciones: ["Decorativas", "Aromáticas", "Comestibles"]
  }
];

const recomendaciones = {
  "Sansevieria": {
    descripcion: "Ideal para interiores con poca luz y bajo mantenimiento.",
    imagen: "../img/CAT 6.jpg"
  },
  "Calathea": {
    descripcion: "Perfecta para ambientes húmedos y con sombra.",
    imagen: "../img/CAT3.jpg"
  },
  "Lavanda": {
    descripcion: "Aromática, con propiedades relajantes. No tóxica para mascotas.",
    imagen: "../img/CAT5.jpg"
  },
  "Cactus": {
    descripcion: "Planta muy resistente, ideal para personas con poco tiempo.",
    imagen: "../img/CAT9.jpg"
  },
  "Romero": {
    descripcion: "Comestible, aromática y de fácil cultivo en exteriores.",
    imagen: "../img/CAT1.jpg"
  },
  "Pothos": {
    descripcion: "Decorativa, resistente y fácil de cuidar. Ideal para interiores.",
    imagen: "../img/CAT7.jpg"
  }
};

let respuestas = [];
let actual = 0;

const preguntaTexto = document.getElementById("question-title");
const contenedorOpciones = document.getElementById("answers");
const paso = document.getElementById("step-indicator");
const btnPrev = document.getElementById("prevBtn");
const btnNext = document.getElementById("nextBtn");
const resultado = document.getElementById("result");
const cajaCuestionario = document.getElementById("quiz-box");
const mensajeFinal = document.getElementById("result-message");

function mostrarPregunta() {
  const pregunta = preguntas[actual];
  preguntaTexto.textContent = pregunta.texto;
  paso.textContent = `${actual + 1} de ${preguntas.length}`;
  contenedorOpciones.innerHTML = "";

  pregunta.opciones.forEach(opcion => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opcion;
    btn.onclick = () => seleccionarOpcion(opcion);

    if (respuestas[actual] === opcion) {
      btn.classList.add("selected");
    }

    contenedorOpciones.appendChild(btn);
  });

  btnPrev.style.display = actual === 0 ? "none" : "inline-block";
  btnNext.textContent = actual === preguntas.length - 1 ? "Finalizar" : "Continuar";
}

function seleccionarOpcion(opcion) {
  respuestas[actual] = opcion;
  mostrarPregunta();
}

btnNext.addEventListener("click", () => {
  if (!respuestas[actual]) {
    alert("Por favor selecciona una opción");
    return;
  }

  if (actual < preguntas.length - 1) {
    actual++;
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
});

btnPrev.addEventListener("click", () => {
  if (actual > 0) {
    actual--;
    mostrarPregunta();
  }
});

function mostrarResultado() {
  cajaCuestionario.style.display = "none";
  resultado.classList.remove("hidden");

  let recomendacion = "Sansevieria"; // por defecto

  const clima = respuestas[0];
  const espacio = respuestas[1];
  const mascotas = respuestas[2];
  const hijos = respuestas[3];
  const tiempo = respuestas[4];
  const tipo = respuestas[5];

  if (clima === "Húmedo" && espacio.includes("Departamento")) {
    recomendacion = "Calathea";
  } else if (mascotas.includes("gatos") && tipo === "Aromáticas") {
    recomendacion = "Lavanda";
  } else if (tiempo === "Muy poco") {
    recomendacion = "Cactus";
  } else if (tipo === "Comestibles") {
    recomendacion = "Romero";
  } else if (hijos === "Sí" && tipo === "Decorativas") {
    recomendacion = "Pothos";
  }

  const planta = recomendaciones[recomendacion];

  mensajeFinal.innerHTML = `
    <h3>¡Gracias por contestar!</h3>
    <p>Tu planta ideal es:</p>
    <h2>${recomendacion}</h2>
    <img src="${planta.imagen}" alt="${recomendacion}" style="max-width: 200px; border-radius: 12px; margin: 1rem 0;">
    <p>${planta.descripcion}</p>
    <p>Basado en tus respuestas:</p>
    <ul>
      ${respuestas.map((r, i) => `<li>${i + 1}. ${r}</li>`).join("")}
    </ul>
  `;
}

mostrarPregunta();
