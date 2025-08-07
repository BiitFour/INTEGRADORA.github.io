import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpxDBpbRULGy79ID_KySe2wjj1T-szhJI",
  authDomain: "integradora10a-6bf01.firebaseapp.com",
  databaseURL: "https://integradora10a-6bf01-default-rtdb.firebaseio.com",
  projectId: "integradora10a-6bf01",
  storageBucket: "integradora10a-6bf01.firebasestorage.app",
  messagingSenderId: "791116131611",
  appId: "1:791116131611:web:4db9820ecab328410eb7be"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // ✅ Usuario autenticado correctamente
      window.location.href = "../index.html"; // o "./index.html" según ruta
    })
    .catch((error) => {
      alert("Error al iniciar sesión: " + error.message);
    });
});
