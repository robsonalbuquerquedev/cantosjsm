// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhUnXxnERNb4DvXjqxzzjY8cn7e5CUdHc",
  authDomain: "cantosjsm.firebaseapp.com",
  databaseURL: "https://cantosjsm-default-rtdb.firebaseio.com", // Adicione o URL do Realtime Database
  projectId: "cantosjsm",
  storageBucket: "cantosjsm.appspot.com",
  messagingSenderId: "93917980384",
  appId: "1:93917980384:web:99e64d97411dc6cd171285"
};

// Evita inicializar mais de uma vez
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Exporta o Realtime Database
export const database = getDatabase(app);
export default app;
