document.addEventListener('DOMContentLoaded', function() {
    const options = [
        "Aucune efficacité",
        "Efficacité faible",
        "Efficacité moyenne",
        "Efficacité forte"
    ];

    const form = document.getElementById('ranking');
    const responses = form.querySelectorAll('.response');

    responses.forEach(response => {
        options.forEach(option => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = response.id;
            input.value = option;
            input.id = `${response.id}-${option}`;
            input.setAttribute('aria-labelledby', `${response.id} ${response.id}-${option}`);

            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.textContent = option;

            response.appendChild(input);
            response.appendChild(label);
        });
    });

    form.addEventListener('change', function() {
        const formData = new FormData(this);
        if (Array.from(formData.values()).length === responses.length) {
            this.submit();
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const rankings = {};
        let valid = true;

        for (let [name, value] of formData.entries()) {
            if (rankings[value]) {
                valid = false;
                alert('Chaque option doit être unique.');
                break;
            }
            rankings[value] = name;
        }

        if (valid) {
            console.log(rankings);
        }
    });
});
