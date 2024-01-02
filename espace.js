
const apiKey = 'j6iYmHHSOL1Ib1uvGZYCPL67eMto17Rs29cweSB2';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const xhr = new XMLHttpRequest();
xhr.open('GET', apiUrl, true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);

        const imgElement = document.createElement('img');
        imgElement.src = data.url;
        imgElement.alt = data.title;
        imgElement.classList.add('centered-image');
        
        document.body.appendChild(imgElement);

        const titleElement = document.createElement('h2');
        titleElement.textContent = data.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = data.explanation;

       
        titleElement.classList.add('texteBlanc');
        descriptionElement.classList.add('texteBlanc', 'large-description');

        document.body.appendChild(titleElement);
        document.body.appendChild(descriptionElement);
    } else {
        console.error('Erreur lors de la récupération des données.');
    }
};

xhr.onerror = function () {
    console.error('Erreur réseau lors de la récupération des données.');
};

xhr.send();
