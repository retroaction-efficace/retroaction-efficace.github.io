document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.draggable p');
    const dropzones = document.querySelectorAll('.dropzone');
    const draggableContainer = document.getElementById('draggable');
    const verifyButton = document.getElementById('verify');
    let currentIndex = 0;

    paragraphs.forEach(p => {
        p.addEventListener('dragstart', dragStart);
    });

    dropzones.forEach(zone => {
        zone.addEventListener('dragover', dragOver);
        zone.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        e.target.appendChild(draggableElement);

        currentIndex++;
        if (currentIndex < paragraphs.length) {
            paragraphs[currentIndex].style.display = 'block';
        } else {
            verifyButton.style.display = 'block';
        }
    }
});
