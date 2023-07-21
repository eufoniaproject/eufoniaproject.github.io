import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAi2zq5KC46pcCidFnFGh6l3pPtQBP0x8I',
  authDomain: 'eufoniaproject-35f26.firebaseapp.com',
  projectId: 'eufoniaproject-35f26',
  storageBucket: 'eufoniaproject-35f26.appspot.com',
  messagingSenderId: '412424104473',
  appId: '1:412424104473:web:ba2d5b06ce5d26546cd888',
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Crear una instancia de Firestore
const db = firebase.firestore();

export default db;