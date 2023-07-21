// Importa Firebase y el archivo JSON languages.json
import firebase from './firebase-config.js'; // Ruta correcta al archivo firebase-config.js
import data from './languages.json' assert { type: "json" }; // Ruta correcta al archivo JSON languages.json

// Configura Firebase
const db = firebase.firestore();

// Agregar datos a Firestore
data.forEach((idioma) => {
  db.collection('idiomas').add(idioma)
    .then((docRef) => {
      console.log('Documento agregado con ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error al agregar documento: ', error);
    });
});
