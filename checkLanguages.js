// Importa la configuración de Firebase y la instancia de Firestore
import db from './firebase-config.js';

// Nombre de la colección donde están almacenados los idiomas
const collectionName = 'idiomas';

// Realiza la consulta para obtener todos los documentos en la colección
db.collection(collectionName).get()
  .then((querySnapshot) => {
    // El tamaño de querySnapshot indica la cantidad de documentos (idiomas) en la colección
    const numberOfLanguages = querySnapshot.size;
    console.log(`Se han exportado correctamente ${numberOfLanguages} idiomas.`);

    // Recorre cada documento para obtener los nombres de los idiomas y sus IDs
    console.log("Nombres de los idiomas y sus IDs:");
    querySnapshot.forEach((doc) => {
      const nombreIdioma = doc.data()["Nombre del idioma"]; // Reemplaza 'Nombre del idioma' con el nombre correcto del campo
      if (nombreIdioma === "undefined") {
        console.log(`ID del documento con nombre "undefined": ${doc.id}`);
      } else {
        console.log(`${nombreIdioma}: ${doc.id}`);
      }
    });
  })
  .catch((error) => {
    console.error('Error al obtener los idiomas:', error);
  });
