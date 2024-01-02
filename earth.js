async function chargerImageEPIC() {
    const epicApiKey = 'j6iYmHHSOL1Ib1uvGZYCPL67eMto17Rs29cweSB2';
    const epicDate = '2023-08-30';

    const epicApiUrl = `https://api.nasa.gov/EPIC/api/natural/date/${epicDate}?api_key=${epicApiKey}`;

    try {
        const response = await fetch(epicApiUrl);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données EPIC.');
        }

        const data = await response.json();

        if (data.length > 0) {
            const imageUrl = data[0].image;

            const imgElement = document.getElementById('epicImage');
            imgElement.src = imageUrl;
            imgElement.alt = 'Image EPIC pour le 30/08/23';

            const imageUrlElement = document.getElementById('imageURL');
            imageUrlElement.textContent = `URL de l'image EPIC : ${imageUrl}`;
        } else {
            console.error('Aucune donnée EPIC disponible pour la date spécifiée.');
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données EPIC:', error);
    }
}