document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.ranking');
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
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html.trim();
                const responseDiv = tempDiv.firstChild;
                responseDiv.querySelector('label').textContent = responseText;
                responseDiv.querySelector('input[type="range"]').name = `p${index + 1}`;
                form.appendChild(responseDiv);
            })
            .catch(error => console.error('Erreur lors du chargement du fichier response.html:', error));
    });
});
