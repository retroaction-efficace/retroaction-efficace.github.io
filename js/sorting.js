document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.draggable p');
    const dropzones = document.querySelectorAll('.dropzone');
    const verifyButton = document.querySelector('.verify');
    const draggableContainer = document.getElementById('draggable');
    let currentIndex = 0;

    paragraphs.forEach(p => {
        p.addEventListener('dragstart', dragStart);
        p.setAttribute('draggable', 'true');
    });

    verifyButton.addEventListener('dragstart', dragStart);

    dropzones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            console.log('Drag over event');
        });
        zone.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.innerHTML);
        console.log('Drag start event:', e.target.innerHTML); // Log de débogage
    }

    function drop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const draggableElement = Array.from(paragraphs).find(p => p.innerHTML === data) || verifyButton;
        console.log('Drop event:', data); // Log de débogage

        if (e.target.children.length === 0) {
            e.target.appendChild(draggableElement);
            draggableElement.classList.replace('visible', 'dropped');

            if (currentIndex < paragraphs.length - 1) {
                paragraphs[++currentIndex].parentElement.classList.replace('hidden', 'visible');
            } else {
                dropzones.forEach(zone => zone.classList.add('hidden'));
                draggableContainer.style.display = 'none'; // Masquer le conteneur draggable
                verifyButton.classList.replace('hidden', 'visible');
            }
        }
    }
});
