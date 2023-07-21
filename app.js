// Importa Firebase y el archivo JSON languages.json
import db from './firebase-config.js'; // Asegúrate de que la ruta sea correcta
import 'firebase/firestore';
import fs from 'fs';

// Configura Firebase
// ...

// Lee el archivo JSON
const rawData = fs.readFileSync('./languages.json');
const data = JSON.parse(rawData);

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
