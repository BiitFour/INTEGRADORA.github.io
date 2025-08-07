// auth.js
console.log("Verificando autenticación...");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpxDBpbRULGy79ID_KySe2wjj1T-szhJI",
  authDomain: "integradora10a-6bf01.firebaseapp.com",
  databaseURL: "https://integradora10a-6bf01-default-rtdb.firebaseio.com",
  projectId: "integradora10a-6bf01",
  storageBucket: "integradora10a-6bf01.appspot.com", // corregido ".app" por ".com"
  messagingSenderId: "791116131611",
  appId: "1:791116131611:web:4db9820ecab328410eb7be"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Registro
const registroForm = document.getElementById('registro-form');
if (registroForm) {
  registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Formulario de registro enviado");

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log("Usuario creado:", userCredential.user);
        const user = userCredential.user;

        return set(ref(database, 'usuarios/' + user.uid), {
  Email: email,
  Key: user.uid,
  Rol: "usuario"  // Puedes cambiarlo si deseas otro rol por defecto
});


        
      })
      .then(() => {
        alert('Cuenta creada con éxito');
        window.location.href = "../vistas/login.html";
      })
      .catch(error => {
        console.error("Error en el proceso:", error);
        alert("Error: " + error.message);
      });
  });
}



// Mostrar/ocultar menú hamburguesa
const menuIcono = document.getElementById('menu-icono');
const menuDesplegable = document.getElementById('menu-desplegable');

if (menuIcono && menuDesplegable) {
  menuIcono.addEventListener('click', () => {
    const isVisible = menuDesplegable.style.display === 'block';
    menuDesplegable.style.display = isVisible ? 'none' : 'block';
  });
}

const cerrarSesion = document.getElementById('cerrar-sesion');
cerrarSesion?.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location.href = "../vistas/login.html";
    })
    .catch((error) => {
      console.error("Error al cerrar sesión", error);
    });
});

