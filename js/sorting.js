document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.draggable p');
    const dropzones = document.querySelectorAll('.dropzone');
    const verifyButton = document.getElementById('verify');
    let currentIndex = 0;

    paragraphs.forEach(p => p.addEventListener('dragstart', dragStart));
    dropzones.forEach(zone => {
        zone.addEventListener('dragover', e => e.preventDefault());
        zone.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        e.target.appendChild(draggableElement);

        toggleVisibility();
    }

    function toggleVisibility() {
        paragraphs[currentIndex].classList.replace('visible', 'hidden');
        currentIndex++;
        if (currentIndex < paragraphs.length) {
            paragraphs[currentIndex].classList.replace('hidden', 'visible');
        } else {
            verifyButton.classList.replace('hidden', 'visible');
        }
    }
});
