document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const form = document.querySelector('.ranking'); // Select the form using the class
    const responses = [
        "Fournir des pistes d'amélioration",
        "Récompenser",
        "Fournir la bonne réponse",
        "Punir",
        "Identifier les erreurs",
        "Attribuer une note chiffrée",
        "Remplir une grille critériée",
        "Complimenter l'apprenant"
    ];

    responses.forEach((responseText, index) => {
        fetch('components/ranking.html')
            .then(response => response.text())
            .then(html => {
                console.log('Fetched HTML:', html);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html.trim();
                console.log('tempDiv:', tempDiv);
                const responseDiv = tempDiv.firstElementChild; // Use firstElementChild instead of firstChild
                console.log('responseDiv:', responseDiv);
                if (responseDiv) {
                    responseDiv.querySelector('label').textContent = responseText;
                    responseDiv.querySelector('input[type="range"]').name = `p${index + 1}`;
                    form.appendChild(responseDiv);
                    console.log('Appended response:', responseDiv);
                } else {
                    console.error('responseDiv is not a valid element');
                }
            })
            .catch(error => console.error('Erreur lors du chargement du fichier response.html:', error));
    });
});
