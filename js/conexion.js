// Importación de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Tu configuración personalizada
const firebaseConfig = {
  apiKey: "AIzaSyCpxDBpbRULGy79ID_KySe2wjj1T-szhJI",
  authDomain: "integradora10a-6bf01.firebaseapp.com",
  databaseURL: "https://integradora10a-6bf01-default-rtdb.firebaseio.com",
  projectId: "integradora10a-6bf01",
  storageBucket: "integradora10a-6bf01.appspot.com",
  messagingSenderId: "229309932819",
  appId: "1:229309932819:web:95e5a37dd77e92cb4015a6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 👉 Exportar correctamente
export { app, db };
