// marsRoverPhotos.js

function chargerPhotosRover() {
    const apiKey = 'j6iYmHHSOL1Ib1uvGZYCPL67eMto17Rs29cweSB2';
    const roverName = 'curiosity'; // Vous pouvez utiliser 'curiosity', 'opportunity', ou 'spirit'
    const marsRoverUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&api_key=${apiKey}`;

    fetch(marsRoverUrl)
        .then(response => response.json())
        .then(data => {
            
            const roverPhotosSection = document.getElementById('roverPhotos');

           
            data.photos.forEach(photo => {
                const imgElement = document.createElement('img');
                imgElement.src = photo.img_src;
                imgElement.alt = `Photo du rover sur Mars`;

                roverPhotosSection.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données des photos des rovers sur Mars:', error));
}