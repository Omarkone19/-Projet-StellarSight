function chargerAsteroides() {
  const apiKey = 'j6iYmHHSOL1Ib1uvGZYCPL67eMto17Rs29cweSB2';
  const selectedDate = document.getElementById('dateInput').value || new Date().toISOString().split('T')[0];

  const neoWsUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${selectedDate}&end_date=${selectedDate}&detailed=false&api_key=${apiKey}`;

  fetch(neoWsUrl)
      .then(response => response.json())
      .then(data => {
          // Traitez les données des astéroïdes et affichez-les dans la section
          const asteroidesInfoSection = document.getElementById('asteroidesInfo');

          // Exemple : Affichez le nombre total d'astéroïdes aujourd'hui
          asteroidesInfoSection.textContent = `Nombre total d'astéroïdes aujourd'hui : ${data.element_count}`;

          // Exemple : Affichez les informations sur chaque astéroïde
          data.near_earth_objects[selectedDate].forEach(asteroide => {
              const taille = asteroide.estimated_diameter.meters.estimated_diameter_max;
              const distance = asteroide.close_approach_data[0].miss_distance.kilometers;

              const asteroideInfo = document.createElement('p');
              asteroideInfo.textContent = `Taille : ${taille} m, Distance par rapport à la Terre : ${distance} km`;

              asteroidesInfoSection.appendChild(asteroideInfo);
          });
      })
      .catch(error => console.error('Erreur lors de la récupération des données des astéroïdes:', error));
}