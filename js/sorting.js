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

        draggableElement.classList.replace('visible', 'dropped');

        if (currentIndex < paragraphs.length - 1) {
            paragraphs[++currentIndex].classList.replace('hidden', 'visible');
        } else {
            verifyButton.classList.replace('hidden', 'visible');
        }
    }
});
