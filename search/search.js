// JavaScript
import db from 'firebase-config.js';

function searchDocuments() {
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  // Realiza la consulta para obtener los documentos que coinciden con el nombre del idioma buscado
  db.collection('idiomas').where('Nombre del idioma', '==', searchInput).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const documentInfo = document.createElement('div');
        documentInfo.innerHTML = `
          <h3>${data['Nombre del idioma']}</h3>
          <p>Otro campo: ${data['Otro campo']}</p>
          <!-- Agrega aquí los demás campos que quieras mostrar -->
        `;
        searchResults.appendChild(documentInfo);
      });

      if (querySnapshot.empty) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No se encontraron resultados.';
        searchResults.appendChild(noResultsMessage);
      }
    })
    .catch((error) => {
      console.error('Error al realizar la búsqueda:', error);
    });
}