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
                const label = document.createElement('label');
                label.setAttribute('for', `range${index + 1}`);
                label.textContent = responseText;

                const input = document.createElement('input');
                input.type = 'range';
                input.id = `range${index + 1}`;
                input.name = `p${index + 1}`;
                input.min = '0';
                input.max = '3';
                input.step = '1';
                input.setAttribute('list', `tickmarks${index + 1}`);

                const datalist = document.createElement('datalist');
                datalist.id = `tickmarks${index + 1}`;
                ['Aucun', 'Faible', 'Moyen', 'Fort'].forEach((label, value) => {
                    const option = document.createElement('option');
                    option.value = value;
                    option.label = label;
                    datalist.appendChild(option);
                });

                form.appendChild(label);
                form.appendChild(input);
                form.appendChild(datalist);
            });
        });
